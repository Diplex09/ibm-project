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

from flask_cors import CORS

from DB_Connections.DBManager import DBManager 

#Base = declarative_base()
from DB_Connections.baseInstance import Base

db = DBManager.getInstance() 


class ExtraHourType(Base):
    __tablename__ = "type_extra_hours"
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


def getHours():
    hoursList = []
    
    stmt = select(ExtraHourType)
    for hour in db.session.scalars(stmt):
        hoursList.append(hour)
        #print(expense.id_type_of_expense)
        #print(expense.type_name)
        #print(expense.expense_amount)
    resp = jsonify([e.serialize() for e in hoursList]) #Con esto puedes mandar lista de objetos en json
    return resp

def postHours():
    print("si")
    _json = request.json
    _name = _json['name']
    _band = _json['band']
    _country = _json['country']
    _rate = _json['rate']
    _date_start = _json['date_to_start']
    _date_finish = _json['date_to_finish']


    if request.method == 'POST':
        if not _name or not _band or not _country or not _rate or not _date_finish or not _date_finish:
            return "Values fields are incomplete"
        else:
            type = ExtraHourType(_name, _band,  _country,  _rate,  _date_start,  _date_finish)
            
            db.session.add(type)
            db.session.commit()
            
            return "New Hour Type Uploaded Succesfully"

def deleteHour(id):
    db = DBManager.getInstance() 

    
    if request.method == 'DELETE':
        delete = "delete from type_extra_hours where id_type="+ str(id)
        db.session.execute(delete)
        db.session.commit()

        return "Hour delete done"

def updateHour(id):

    _json = request.json
    newHour = ExtraHourType(_json["name"],_json['band'], _json['country'],_json['rate'], _json['date_to_start'], _json['date_to_finish'] )
    
    editType = db.session.query(ExtraHourType).filter(ExtraHourType.id_type == id).one()
    print(editType.type_name)
    editType.type_name = newHour.type_name
    editType.band = newHour.band
    editType.country = newHour.country
    editType.rate = newHour.rate
    editType.date_to_start = newHour.date_to_start
    editType.date_to_finish = newHour.date_to_finish

    db.session.commit()

    return "DONE"
