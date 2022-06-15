from ast import Import
import json
import string
import sys
from unicodedata import numeric
import psycopg2
import psycopg2.extras

import sqlalchemy
from sqlalchemy import *
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import Session

from flask import Flask, jsonify, request, session, send_from_directory
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

from DB_Connections.DBManager import DBManager 

# Base = declarative_base()
from DB_Connections.baseInstance import Base
db = DBManager.getInstance() 

class Users(Base):
    __tablename__ = "users"
    id_user = Column(Integer, primary_key=True)
    fullname = Column(String(100))
    mail = Column(String(100))
    passwd = Column(String(300))
    rol = Column(Integer, ForeignKey("roles.rol_id"))

    def __init__(self, name, mail, passwd, rol):
        self.fullname = name
        self.mail = mail
        self.passwd = passwd
        self.rol = rol

    def serialize(self):
        return {
            'id_user': self.id_user,
            'fullname': self.fullname,
            'mail': self.mail,
            'rol': self.rol
        }

def check_rol(id):
    check_for_user = select(Users.rol).where(Users.id_user == id)
    rol = db.session.scalars(check_for_user).one()

    return rol

@jwt_required()
def all_users():
    _id = get_jwt_identity()
    rol = check_rol(_id)

    if rol == 1:
        all_people = []

        stmt = select(Users)
        for person in db.session.scalars(stmt):
            all_people.append(person)
        resp = jsonify([e.serialize() for e in all_people]) #Con esto puedes mandar lista de objetos en json
        return resp

    else:
        resp = jsonify({'message' : 'Unauthorized'})
        resp.status_code = 401
        return resp

@jwt_required()
def create_user():
    _id = get_jwt_identity()
    rol = check_rol(_id)

    if rol == 1:
        _json = request.json
        _fullname = _json['fullname']
        _mail = _json['mail']
        _passwd = _json['passwd']
        _rol = _json['rol']

        hashed_passwd = generate_password_hash(_passwd)

        check_for_user = select(Users).where(Users.mail == _mail)
        user_exists = db.session.execute(check_for_user)

        if not user_exists:
            # Arreglar IDs
            count = db.session.query(func.count(Users.id))

            updated_count = count + 1

            update_ids = text("ALTER SEQUENCE users_id_user_seq RESTART WITH" + updated_count)

            db.session.execute(update_ids)

            # Crear usuario
            user = Users(_fullname, _mail, hashed_passwd, _rol)
        
            db.session.add(user)
            db.session.commit()

            check_for_user = select(Users).where(Users.mail == _mail)
            user_exists = db.session.execute(check_for_user)

            db.session.close()

            if user_exists:
                user = db.session.scalars(check_for_user)
                resp = jsonify(user.serialize())
                return resp
                
            else:
                resp = jsonify({'message' : 'Bad Request - could not create user'})
                resp.status_code = 400
                return resp
        else:
            resp = jsonify({'message' : 'User already exists'})
            resp.status_code = 400
            return resp

    else:
        resp = jsonify({'message' : 'Unauthorized'})
        resp.status_code = 401
        return resp

@jwt_required()
def edit_user():
    _id = get_jwt_identity()
    rol = check_rol(_id)

    if rol == 1:
        _json = request.json
        _id = _json['id_user']

        # Checar que exista el usuario 
        check_for_user = select(Users).where(Users.id_user == _id)
        user_exists = db.session.execute(check_for_user)

        if user_exists:
            for col, val in _json.items():
                print(col, val)
                if col == "id_user":
                    continue

                elif col == "fullname":
                    stmt = update(Users).where(Users.id_user == _id).values(fullname = val)

                elif col == "mail":
                    stmt = update(Users).where(Users.id_user == _id).values(mail = val)

                elif col == "rol":
                    stmt = update(Users).where(Users.id_user == _id).values(rol = val)

                else:
                    resp = jsonify({'message' : 'Bad Request - field does not match columns in DB'})
                    resp.status_code = 400
                    return resp


                db.session.execute(stmt)

            check_for_user = select(Users).where(Users.id_user == _id)
            user_exists = db.session.execute(check_for_user)

            user = db.session.scalars(check_for_user)
            resp = jsonify(user.serialize())
            return resp

        else:
            resp = jsonify({'message' : 'User does not exist'})
            resp.status_code = 404
            return resp

    else:
        resp = jsonify({'message' : 'Unauthorized'})
        resp.status_code = 401
        return resp

@jwt_required()
def delete_user():
    _id = get_jwt_identity()
    rol = check_rol(_id)

    if rol == 1:
        _json = request.json
        _id = _json['id_user']

        check_for_user = select(Users).where(Users.id_user == _id)
        user_exists = db.session.execute(check_for_user)

        if user_exists:
            delete_user = delete(Users).where(Users.id_user == _id)
            resp = db.session.execute(delete_user)

            return jsonify ({'message' : 'User successfully deleted'})

        else:
            resp = jsonify({'message' : 'Bad Request - could not find user'})
            resp.status_code = 400
            return resp

    else:
        resp = jsonify({'message' : 'Unauthorized'})
        resp.status_code = 401
        return resp
