from ast import Import
import json
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


class Employee(Base):
    __tablename__ = "employee"
    id_employee = Column(Integer, primary_key=True)
    employee_name = Column(String(150))
    employee_lastname = Column(String(150))
    mail = Column(String(150))
    country_origin = Column(String(150))
    id_ica = Column(Integer, ForeignKey("ica.id_ica"))
    country_residence = Column(String(150))
    id_type = Column(Integer, ForeignKey("type.id_type"))
    band = Column(Integer)
    squad = Column(String(150))
    start_date = Column(Date)
    end_date = Column(Date)

    def __init__(self, idEmp,name,lastName, mail, countryOrigin,idIcaTable,countryResidence,id_typeTable,band,squad,start_date,end_date):
        self.id_employee = idEmp
        self.employee_name = name
        self.employee_lastname = lastName
        self.mail = mail
        self.country_origin = countryOrigin
        self.id_ica = idIcaTable
        self.country_residence = countryResidence
        self.id_type = id_typeTable
        self.band = band
        self.squad = squad
        self.start_date = start_date
        self.end_date = end_date


    def serialize(self):
        return {
            'employee_id': self.id_employee, 
            'employeeName': self.employee_name,
            'employeeLastName': self.employee_lastname,
            'mail':  self.mail,
            'countryOrigin': self.country_origin,
            'ICA_ID': self.id_ica,
            'countryResidence': self.country_residence,
            'type_id': self.id_type,
            'band': self.band,
            'squad': self.squad,
            'startDate': self.start_date,
            'endDate': self.end_date
        }

def getEmployees():
    global db
    if db==None:
        db=DBManager.getInstance
    employeeList = []

    stmt = select(Employee)
    for employee in db.session.scalars(stmt):
        employeeList.append(employee)
        # print(expense.id_type_of_expense)
        # print(expense.type_name)
        # print(expense.expense_amount)
    resp = jsonify([e.serialize() for e in employeeList]) #Con esto puedes mandar lista de objetos en json
    return resp