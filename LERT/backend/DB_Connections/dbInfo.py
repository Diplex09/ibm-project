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


class ExpenseType(Base):
    __tablename__ = "type_of_expense"
    id_type_of_expense = Column(Integer, primary_key=True)
    type_name = Column(String(150))
    expense_amount = Column(Numeric())

    def __init__(self, name, amount):
        self.type_name = name
        self.expense_amount = amount


    def serialize(self):
        return {
            'id': self.id_type_of_expense, 
            'typeName': self.type_name,
            'expenseAmount': self.expense_amount,
        }


def getExpensesTypes():
    expenseList = []

    stmt = select(ExpenseType)
    for expense in db.session.scalars(stmt):
        expenseList.append(expense)
        # print(expense.id_type_of_expense)
        # print(expense.type_name)
        # print(expense.expense_amount)
    resp = jsonify([e.serialize() for e in expenseList]) #Con esto puedes mandar lista de objetos en json
    return resp

def postExpenseType():
    _json = request.json
    _name = _json['name']
    _amount = _json['amount']
    
    if request.method == 'POST':
        if not _name or not _amount:
            return "All necessary values not received"
        else:
            expense = ExpenseType(_name, _amount)
            
            db.session.add(expense)
            db.session.commit()
            
            return "New Expense Type Uploaded Succesfully"