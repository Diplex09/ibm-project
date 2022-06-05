from ast import Import
from cmath import cos
import psycopg2
import psycopg2.extras

import sqlalchemy
from sqlalchemy import *

from flask import Flask, jsonify, request, session, send_from_directory

from flask_cors import CORS

from backend.DB_Connections.DBManager import DBManager
from backend.DB_Connections.dbIca import ICA
from backend.DB_Connections.dbtypes import Types


#Base = declarative_base()
from backend.DB_Connections.baseInstance import Base
db = DBManager.getInstance() 


class AllExpenses(Base):
    __tablename__ = "expenses"
    id_expense = Column(Integer, primary_key=True)
    employee_mail = Column(String(150))
    date_limit = Column(Date)
    cost = Column(float)
    comment = Column(String(150))
    id_ICA = Column(Integer, ForeignKey("ica.id_ica"))
    id_Type = Column(Integer, ForeignKey("type.id_type"))
    ica_manager = Column(String(150))
    administrator = Column(String(150))

    

    def __init__(self,mail,date_limit, cost, comment, idICA, idType, ica_manager, administrator):
        self.employee_mail = mail
        self.date_limit = date_limit
        self.cost = cost
        self.comment = comment
        self.id_ica = idICA
        self.id_type = idType
        self.ica_manager = ica_manager
        self.administrator = administrator
        


    def serialize(self):
        return {
            'expense_id': self.id_expense, 
            'mail': self.employee_mail,
            'date_limit':  self.date_limit,
            'cost':  self.cost,
            'comment': self.comment,
            'ICA_ID': self.id_ica,
            'TYPE_ID': self.id_type,
            'ica_manager': self.ica_manager,
            'admninistrator': self.administrator,
            
        }