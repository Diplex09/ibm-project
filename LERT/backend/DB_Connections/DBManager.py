from configparser import ConfigParser
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sqlalchemy.ext.declarative import declarative_base
import psycopg2
import psycopg2.extras
# singleton para acceso a recursos de DB

# Base = declarative_base()
from DB_Connections.baseInstance import Base

class DBManager:

    instance = None

    def __init__(self):
        
        # verifica que no se cree una segunda instancia del DBManager
        if DBManager.instance != None:
            raise Exception("Use getInstance")
        
        # si llegamos aquí todo bien
        print("connection succesfull")

        # cargar valores desde configuracion
        config = ConfigParser()
        config.read('config.ini')
        db_config = config['DATABASE']

        driver = db_config['DRIVER']
        user = db_config['USER']
        password = db_config['PASSWORD']
        server = db_config['SERVER']
        port = db_config['PORT']
        db = db_config['DBNAME']

        # crear objeto engine y objeto session
        self.engine = create_engine(driver + '://' + user + ':' + password + '@' + server +  '/' + db)
        self.session = Session(self.engine)

    # usa siempre este método para asegurarte de acceder a la instancia única
    def getInstance():

        if DBManager.instance == None:
            DBManager.instance = DBManager()
        
        return DBManager.instance