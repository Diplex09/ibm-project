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

from flask_cors import CORS #comment this on deployment

Base = declarative_base()

# intención de ORM 
# mappear renglones de una DB a objetos
class Types(Base):
    # agregamos los campos donde se mapearan las columnas de la db
    __tablename__ = "type"
    id_type = Column(Integer, primary_key=True)
    type_name = Column(String(150))
    band = Column(Integer)
    country = Column(String(150))
    rate = Column(Integer)
    date_to_start = Column(Date)
    date_to_finish = Column(Date)

    def __init__(self, name, band, country, rate, date_start, date_finish):
        self.type_name = name
        self.band = band
        self.country = country
        self.rate = rate
        self.date_to_start = date_start 
        self.date_to_finish = date_finish



    def serialize(self):
        return {
            'id': self.id_type,
            'name': self.type_name,
            'band': self.band,
            'country': self.country,
            'rate': self.rate,
            'date_to_start': self.date_to_start,
            'date_to_finish': self.date_to_finish
        }


def getTypes():
    typesList = []
    engine = sqlalchemy.create_engine("postgresql+psycopg2://postgres:password@localhost/lert")
    session = Session(engine)
    #hacer query
    
    stmt = select(Types)
    for type in session.scalars(stmt):
        typesList.append(type)
        #print(expense.id_type_of_expense)
        #print(expense.type_name)
        #print(expense.expense_amount)
    resp = jsonify([e.serialize() for e in typesList]) #Con esto puedes mandar lista de objetos en json
    return resp

def postType():
    print("si")
    _json = request.json
    _name = _json['name']
    _band = _json['band']
    _country = _json['country']
    _rate = _json['rate']
    _date_start = _json['date_to_start']
    _date_finish = _json['date_to_finish']


    engine = sqlalchemy.create_engine("postgresql+psycopg2://postgres:password@localhost/lert")
    session = Session(engine)
    if request.method == 'POST':
        if not _name or not _band or not _country or not _rate or not _date_finish or not _date_finish:
            return "Values fields are incomplete"
        else:
            type = Types(_name, _band,  _country,  _rate,  _date_start,  _date_finish)
            
            session.add(type)
            session.commit()
            
            return "New Expense Type Uploaded Succesfully"

def deleteType(id):
    
    engine = sqlalchemy.create_engine("postgresql+psycopg2://postgres:password@localhost/lert")
    session = Session(engine)
    if request.method == 'DELETE':
        autoIncrement = "alter sequence type_id_type_seq restart "+ str(id)
        session.execute(autoIncrement)
        delete = "delete from type where id_type="+ str(id)
        session.execute(delete)
        session.commit()

        return "Type delete done"

def updateType(id):
    print("entre")
    _json = request.json
    _name = _json["name"]
    _band = _json['band']
    _country = _json['country']
    _rate = _json['rate']
    _date_start = _json['date_to_start']
    _date_finish = _json['date_to_finish']
    print(_name)
    


    return "si"
