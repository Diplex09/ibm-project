from ast import Import
import psycopg2
import psycopg2.extras

import sqlalchemy
from sqlalchemy import *

from flask import Flask, jsonify, request, session, send_from_directory

from flask_cors import CORS

from DB_Connections.DBManager import DBManager
from DB_Connections.dbIca import ICA
from DB_Connections.dbtypes import Types


#Base = declarative_base()
from DB_Connections.baseInstance import Base
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

    def __init__(self,name,lastName, mail, countryOrigin,idIcaTable,countryResidence,id_typeTable,band,squad,start_date,end_date):
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

def newPostEmployee():
    print("si")
    _json = request.json
    _firstName = _json['firstName']
    _lastName = _json['lastName']
    _email = _json['email']
    _originCountry = _json['originCountry']
    _ICA = _json['ICA']
    _currentCountry = _json['currentCountry']
    _type = _json['type']
    _band = _json['band']
    _squad = _json['squad']
    _dateStart = _json['dateStart']
    _dateFinish = _json['dateFinish']
    


    if request.method == 'POST':
        if not _firstName or not _lastName or not _email or not _originCountry or not _ICA or not _currentCountry or not _type or not _squad or not _dateStart or not _dateFinish:
            return "Values fields are incomplete"
        else:
            employee = Employee( _firstName, _lastName,  _email,  _originCountry, _ICA,  _currentCountry,  _type, _band, _squad,  _dateStart, _dateFinish)
            
            db.session.add(employee)
            db.session.commit()
            
            return "New Employee Uploaded Succesfully"


def deleteEmployee(id):
    global db
    if request.method == 'DELETE':
        # autoIncrement = "alter sequence id_type_of_expense_type_seq restart "+ str(id)
        # db.session.execute(autoIncrement)
        queryCheck = select(Employee).where(Employee.id_employee == id)
        expType=db.session.scalar(queryCheck)
        if(expType == None): #check if record does exist
            return "Employee record not found"
        else:
            stmt = delete(Employee).where(Employee.id_employee == id)
            print(stmt)
            db.session.execute(stmt)
            db.session.commit()

            return "Employee delete done"


def updateEmployee(id):

    _json = request.json
    newEmployee = Employee(
        _json['firstName'], 
        _json['lastName'], 
        _json['email'],
        _json['originCountry'],
        _json['ICA'], 
        _json['currentCountry'],
        _json['type'],
        _json['band'],
        _json['squad'],
        _json['dateStart'],
        _json['dateFinish'] 

        )
    
    editEmployee = db.session.query(Employee).filter(Employee.id_employee == id).one()
    print(editEmployee.employee_name)

    editEmployee.employee_name = newEmployee.employee_name 
    editEmployee.employee_lastname = newEmployee.employee_lastname 
    editEmployee.mail = newEmployee.mail 
    editEmployee.country_origin = newEmployee.country_origin 
    editEmployee.id_ica = newEmployee.id_ica 
    editEmployee.country_residence = newEmployee.country_residence 
    editEmployee.id_type = newEmployee.id_type  
    editEmployee.band = newEmployee.band  
    editEmployee.squad = newEmployee.squad  
    editEmployee.start_date = newEmployee.start_date  
    editEmployee.end_date = newEmployee.end_date 

    db.session.commit()

    return "DONE"