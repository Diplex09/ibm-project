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

from backend.DB_Connections.DBManager import DBManager 

Base = declarative_base()
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