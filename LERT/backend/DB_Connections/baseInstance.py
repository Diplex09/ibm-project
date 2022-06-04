from sqlalchemy import create_engine, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, backref
from sqlalchemy import Column, Integer, String
from sqlalchemy import Table, Text

from backend.DB_Connections.DBManager import DBManager
db = DBManager.getInstance() 

Base = declarative_base()