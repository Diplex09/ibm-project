from ast import Import
import json
import sys
from tokenize import Double
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

class ICA(Base):
    __tablename__ = "ica"
    id_ica = Column(Integer, primary_key=True)
    ica_code = Column(String(120))
    ica_core = Column(String(120))
    year = Column(String(120))
    id_planning = Column(String(50))
    ica_owner = Column(String(150))
    budget = Column(Integer)
    country = Column(String(120))
    status = Column(String(200))
    depto = Column(String(50))
    frequency_bill = Column(String(50))
    cc = Column(String(50))
    city_name_req = Column(String(100))
    division = Column(String(50))
    major = Column(String(50))
    minor = Column(String(50))
    leru = Column(String(50))
    description = Column(String(200))
    id_type = Column(Integer, ForeignKey("type.id_type"))
    nec = Column(Integer)
    total_plus_taxes = Column(Float)
    start_Date = Column(Date)
    end_date = Column(Date)
    cty_name_perf = Column(String(50))
    R_Cty_Perf = Column(String(100))
    total_billing = Column(Float)

    def __init__(self,idIca,icaCode,icaCore,year,idPlanning,icaOwner,budget,country,status,depto,frequencyBill,cc,cityNameReq,division,major,
    minor,leru,description,idType,nec,totalPlusTax,startDate,endDate,ctyNamePerf,rCtyPerf,totalBilling):
        self.id_ica = idIca
        self.ica_code = icaCode
        self.ica_core = icaCore
        self.year = year
        self.id_planning = idPlanning
        self.ica_owner = icaOwner
        self.budget = budget
        self.country = country
        self.status = status
        self.depto = depto
        self.frequency_bill = frequencyBill
        self.cc = cc
        self.city_name_req = cityNameReq
        self.division = division
        self.major = major
        self.minor = minor
        self.leru = leru
        self.description = description
        self.id_type = idType
        self.nec = nec
        self.total_plus_taxes = totalPlusTax
        self.start_Date = startDate
        self.end_date = endDate
        self.cty_name_perf= ctyNamePerf
        self.R_Cty_Perf = rCtyPerf
        self.total_billing = totalBilling

    def serialize(self):
        return {
            'id_ica': self.id_ica, 
            'ica_code': self.ica_code,
            'ica_core': self.ica_core,
            'year': self.year,
            'id_planning': self.id_planning,
            'ica_owner': self.ica_owner,
            'budget': self.budget,
            'country': self.country,
            'status': self.status,
            'depto': self.depto ,
            'frequency_bill': self.frequency_bill,
            'cc': self.cc,
            'city_name_req': self.city_name_req, 
            'division': self.division,
            'major': self.major,
            'minor': self.minor,
            'leru': self.leru,
            'description': self.description,
            'id_type': self.id_type,
            'nec': self.nec,
            'total_plus_taxes': self.total_plus_taxes,
            'start_Date': self.start_Date,
            'end_date': self.end_date ,
            'cty_name_perf': self.cty_name_perf,
            'R_Cty_Perf': self.R_Cty_Perf,
            'total_billing': self.total_billing
        }
        
        
