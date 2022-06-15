from ast import Import
import json
import sys
from tokenize import Double
from unicodedata import numeric
import psycopg2
import psycopg2.extras

import sqlalchemy
from sqlalchemy import *
from sqlalchemy import exc
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import Session

from flask import Flask, jsonify, request, session, send_from_directory

from flask_cors import CORS

from DB_Connections.DBManager import DBManager

#Base = declarative_base()
from DB_Connections.baseInstance import Base
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
    start_date = Column(Date)
    end_date = Column(Date)
    cty_name_perf = Column(String(50))
    r_cty_perf = Column(String(100))
    total_billing = Column(Float)

    def __init__(self, icaCode,icaCore,year,idPlanning,icaOwner,budget,country,status,depto,frequencyBill,cc,cityNameReq,division,major,
    minor,leru,description,idType,nec,totalPlusTax,startDate,endDate,ctyNamePerf,rCtyPerf,totalBilling):
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
        self.start_date = startDate
        self.end_date = endDate
        self.cty_name_perf= ctyNamePerf
        self.r_cty_perf = rCtyPerf
        self.total_billing = totalBilling

    def serialize(self):
        return {
            'id': self.id_ica, 
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
            'start_date': self.start_date,
            'end_date': self.end_date ,
            'cty_name_perf': self.cty_name_perf,
            'r_cty_perf': self.r_cty_perf,
            'total_billing': self.total_billing
        } 

def allICAs():
    global db
    if db==None:
        db=DBManager.getInstance
    icaList = []

    stmt = select(ICA)
    for ica in db.session.scalars(stmt):
        icaList.append(ica)
    resp = jsonify([e.serialize() for e in icaList]) #Con esto puedes mandar lista de objetos en json
    return resp

def postIca():
    json = request.json
    _ica_code = json['ica_code']
    _ica_core = json['ica_core']
    _year = json['year']
    _id_planning = json['id_planning']
    _ica_owner = json['ica_owner']
    _budget = json['budget']
    _country = json['country']
    _status = json['status']
    _depto = json['depto']
    _frequency_bill = json['frequency_bill']
    _cc = json['cc']
    _city_name_req = json['city_name_req']
    _division = json['division']
    _major = json['major']
    _minor = json['minor']
    _leru = json['leru']
    _description = json['description']
    _id_type = json['id_type']
    _nec = json['nec']
    _total_plus_taxes = json['total_plus_taxes']
    _start_Date = json['start_date']
    _end_date = json['end_date']
    _cty_name_perf= json['cty_name_perf']
    _R_Cty_Perf = json['r_cty_perf']
    _total_billing = json['total_billing']
    print("Posting ICA on endpoint...", file=sys.stdout)

    if not _ica_code or not _ica_core or not _year or not _id_planning or not _ica_owner or not _budget or not _country or not _status or not _depto or not _frequency_bill or not _cc or not _city_name_req or not _division or not _major or not _minor or not _leru or not _description or not _id_type or not _nec or not _total_plus_taxes or not _start_Date or not _end_date or not _cty_name_perf or not _R_Cty_Perf or not _total_billing:
            return "Values fields are incomplete"
    else:
        ica = ICA(_ica_code, _ica_core, _year, 
        _id_planning, _ica_owner, _budget, _country, 
        _status, _depto, _frequency_bill, _cc, 
        _city_name_req, _division, _major, _minor, 
        _leru, _description, _id_type, _nec, 
        _total_plus_taxes, _start_Date, _end_date, 
        _cty_name_perf, _R_Cty_Perf, _total_billing)
        
        try:
            db.session.add(ica)
            db.session.commit()
            
            resp = jsonify({'message' : 'New ICA Uploaded Succesfully', 'ica': ica.serialize()})
            resp.status_code = 200
            resp.headers.add('Access-Control-Allow-Origin', '*')
            return resp

        except exc.SQLAlchemyError as e:

            db.session.rollback()
            resp = jsonify({'message' : 'Error in postHours', 'error': str(e.orig)})
            resp.status_code = 500
            return resp

        finally:
            db.session.close()

def deleteICA(id):
    db = DBManager.getInstance() 
    
    delete = "delete from ica where id_ica="+ str(id)
    
    try:
        db.session.execute(delete)
        db.session.commit()

        resp = jsonify({'message' : 'ICA delete done'})
        resp.status_code = 200
        return resp

    except exc.SQLAlchemyError as e:
        db.session.rollback()
        resp = jsonify({'message' : 'Error in deleteICA', 'error': str(e.orig)})
        resp.status_code = 500
        return resp
        
    finally:
        db.session.close()

def updateICA(id):
    json = request.json
    _ica_code = json['ica_code']
    _ica_core = json['ica_core']
    _year = json['year']
    _id_planning = json['id_planning']
    _ica_owner = json['ica_owner']
    _budget = json['budget']
    _country = json['country']
    _status = json['status']
    _depto = json['depto']
    _frequency_bill = json['frequency_bill']
    _cc = json['cc']
    _city_name_req = json['city_name_req']
    _division = json['division']
    _major = json['major']
    _minor = json['minor']
    _leru = json['leru']
    _description = json['description']
    _id_type = json['id_type']
    _nec = json['nec']
    _total_plus_taxes = json['total_plus_taxes']
    _start_Date = json['start_Date']
    _end_date = json['end_date']
    _cty_name_perf= json['cty_name_perf']
    _R_Cty_Perf = json['R_Cty_Perf']
    _total_billing = json['total_billing']
    
    newICA = ICA(_ica_code, _ica_core, _year, 
        _id_planning, _ica_owner, _budget, _country, 
        _status, _depto, _frequency_bill, _cc, 
        _city_name_req, _division, _major, _minor, 
        _leru, _description, _id_type, _nec, 
        _total_plus_taxes, _start_Date, _end_date, 
        _cty_name_perf, _R_Cty_Perf, _total_billing)

    try:
        editICA = db.session.query(ICA).filter(ICA.id_ica == id).one()

        editICA.ica_code = newICA.ica_code
        editICA.ica_core = newICA.ica_core
        editICA.year = newICA.year
        editICA.id_planning = newICA.id_planning
        editICA.ica_owner = newICA.ica_owner
        editICA.budget = newICA.budget
        editICA.country = newICA.country
        editICA.status = newICA.status
        editICA.depto = newICA.depto
        editICA.frequency_bill = newICA.frequency_bill
        editICA.cc = newICA.cc
        editICA.city_name_req = newICA.city_name_req
        editICA.division = newICA.division
        editICA.major = newICA.major
        editICA.minor = newICA.minor
        editICA.leru = newICA.leru
        editICA.description = newICA.description
        editICA.id_type = newICA.id_type
        editICA.nec = newICA.nec
        editICA.total_plus_taxes = newICA.total_plus_taxes
        editICA.start_date = newICA.start_date
        editICA.end_date = newICA.end_date
        editICA.cty_name_perf= newICA.cty_name_perf
        editICA.r_cty_perf = newICA.r_cty_perf
        editICA.total_billing = newICA.total_billing

        db.session.commit()

        resp = jsonify({'message' : 'ICA Updated Succesfully', 'ica': editICA.serialize()})
        resp.status_code = 200
        resp.headers.add('Access-Control-Allow-Origin', '*')
        return resp

    except exc.SQLAlchemyError as e:
        db.session.rollback()
        resp = jsonify({'message' : 'Error in updateICA', 'error': str(e.orig)})
        resp.status_code = 500
        return resp
    
    finally:
        db.session.close()
