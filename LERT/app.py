import json
from tokenize import Double
from unicodedata import decimal
from flask import Flask, jsonify, request, session, send_from_directory
from flask_restful import Api, Resource, reqparse
#library for encrypting
from werkzeug.security import generate_password_hash, check_password_hash
#from flask_cors import CORS #pip install -U flask-cors
from datetime import timedelta, datetime, timezone
import psycopg2
import psycopg2.extras

from flask_cors import CORS #comment this on deployment
from backend.HelloApiHandler import HelloApiHandler
from backend.login import login
from backend.DB_Connections.dbInfo import getExpensesTypes


from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_jwt_extended import get_jwt, set_access_cookies, unset_jwt_cookies
# from sqlalchemy import Column
# from sqlalchemy import Integer
# from sqlalchemy import String

# from sqlalchemy.orm import declarative_base
# from sqlalchemy.orm import Session

# from sqlalchemy import create_engine
# from sqlalchemy import select


app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) #comment this on deployment
api = Api(app)




@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')


app.config['SECRET_KEY'] = 'lert-teamafk'
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=10)

# If true this will only allow the cookies that contain your JWTs to be sent
# over https.
# - - - IMPORTANT: In production, this should always be set to True - - - 
app.config["JWT_COOKIE_SECURE"] = False
app.config["JWT_TOKEN_LOCATION"] = ["cookies"]
app.config["JWT_SECRET_KEY"] = 'lert-secret'
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(minutes=10)

jwt = JWTManager(app)
CORS(app)

DB_HOST = "localhost"
DB_NAME = "lert"
DB_USER = "postgres"
DB_PASS = "Cruz4zulC4mp30n2021" #en el video pone admin

conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST)

# Using an `after_request` callback, we refresh any token that is within 30
# minutes of expiring. Change the timedeltas to match the needs of your application.
@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            set_access_cookies(response, access_token)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original response
        return response

#/login 
@app.route("/")
def home():
        # passhash = generate_password_hash('password')
        # print(passhash)
        if 'username' in session:
            username = session['username']
            return jsonify({'message' : 'You are already logged in','username': username})
        else:
            resp = jsonify({'message' : 'Unauthorized'})
            resp.status_code = 401
            return resp

        # return passhash

@app.route('/login', methods=['POST'])
def login():
    _json = request.json
    _email = _json['email']
    _password = _json['password']
    # print(_password)
    #validate the received values
    if _email and _password:
        #check user exists
        cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

        sql = "SELECT * FROM users WHERE Mail=%s"
        sql_where = (_email,)

        cursor.execute(sql, sql_where)
        row = cursor.fetchone()
        email = row[2]
        password = row[3]
        if row:
            print(password)
            if check_password_hash(password, _password):
                session['username'] = email
                cursor.close()
                response = jsonify({ 'msg': 'Login Successful', 'user' : {
                        "uid": row[0],
                        "fullName": row[1],
                        "rol": row[4]
                    }})
                access_token = create_access_token(identity=row[0])
                set_access_cookies(response, access_token)
                return response
            else:
                resp = jsonify({'msg' : 'Bad Request - invalid password'})
                resp.status_code = 400
                return resp


    else:
        resp = jsonify({'msg' : 'Bad Request - invalid credentials'})
        resp.status_code = 400
        return resp

@app.route('/logout')
def logout():
    if 'username' in session:
        session.pop('username', None)

    response = jsonify({'msg':'You successfully logged out'})
    unset_jwt_cookies(response)
    return response

# Only for test
@app.route("/protected")
@jwt_required()
def protected():
    return jsonify({'msg' : 'Test Completed Correctly'})

api.add_resource(HelloApiHandler, '/flask/hello')

# api.add_resource(login, '/login')

## ADMIN ACTIONS
@app.route('/create_user', methods=['POST'])
def create_user():
    if 'username' in session:
        _json = request.json
        _fullname = _json['fullname']
        _mail = _json['mail']
        _passwd = _json['passwd']
        _rol = _json['rol']

        hashed_passwd = generate_password_hash(_passwd)

        cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

        # Checar que no exista el usuario 
        sql = "SELECT * FROM users WHERE Mail=%s"
        sql_where = (_mail,)

        cursor.execute(sql, sql_where)
        row = cursor.fetchone()

        if not row:
            # Arreglar IDs
            count_query = 'SELECT COUNT(*) FROM users;'
            cursor.execute(count_query)
            count = cursor.fetchone()[0]

            updated_count = count + 1

            id_query = 'ALTER SEQUENCE users_id_user_seq RESTART WITH %s'
            cursor.execute(id_query, (updated_count,))

            # Crear usuario
            query = 'INSERT INTO users(fullname, mail, passwd, rol) VALUES (%s, %s, %s, %s)'

            query_args = (_fullname, _mail, hashed_passwd, str(_rol),)

            cursor.execute(query, query_args)

            # commit the changes to the database
            conn.commit()

            sql = "SELECT * FROM users WHERE Mail=%s"
            sql_where = (_mail,)

            cursor.execute(sql, sql_where)
            row = cursor.fetchone()

            # close communication with the database
            cursor.close()

            if not row:
                resp = jsonify({'message' : 'Bad Request - could not create user'})
                resp.status_code = 400
                return resp
                
            else:
                return jsonify ({'message' : 'User successfully created',
                            'user' : {
                                "Id_user": row[0],
                                "FullName": row[1],
                                "Mail": row[2],
                                "Rol": row[4]
                            }
                        })

        else:
            resp = jsonify({'message' : 'User already exists'})
            resp.status_code = 400
            return resp

    else:
        resp = jsonify({'message' : 'Unauthorized'})
        resp.status_code = 401
        return resp

@app.route('/delete_user', methods=["DELETE"])
def delete_user():
    if 'username' in session:
        _json = request.json
        _mail = _json['mail']

        cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

        # Checar que exista el usuario 
        sql = "SELECT * FROM users WHERE Mail=%s"
        sql_where = (_mail,)

        cursor.execute(sql, sql_where)
        row = cursor.fetchone()

        if row:
            query = "DELETE FROM users WHERE Mail=%s"
            args = (_mail,)

            cursor.execute(query, args)
            conn.commit()

            return jsonify ({'message' : 'User successfully deleted'})

        else:
            resp = jsonify({'message' : 'Bad Request - could not find user'})
            resp.status_code = 400
            return resp

    else:
        resp = jsonify({'message' : 'Unauthorized'})
        resp.status_code = 401
        return resp

####################Test tabla DB expeses type


app.add_url_rule("/expensesTypes", view_func=getExpensesTypes, methods=['GET'])

@app.route('/newExpenseType', methods=['GET','POST'])
def postExpenseType():
     type_name = request.json['expensesNames']
     expense_amount = request.json['expensesAmount']
     cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
     # Checar que no exista el expense 
     sql = "SELECT * FROM type_Of_expense WHERE type_name=%s"
     sql_where = (type_name,)

     cursor.execute(sql, sql_where)
     row = cursor.fetchone()
     if not row:
        sql = "Insert into type_Of_expense(type_name,expense_amount) VALUES (%s, %s)"
        query_args = (type_name, expense_amount)
        cursor.execute(sql,query_args)
        expenses = cursor.fetchall()

        query = 'INSERT INTO type_Of_expense(type_name, expense_amount) VALUES (%s, %s)'

        query_args = (type_name, expense_amount)

        cursor.execute(query, query_args)

        # commit the changes to the database
        conn.commit()
        sql = "SELECT * FROM type_Of_expense WHERE type_name=%s"
        sql_where = (type_name,)

        cursor.execute(sql, sql_where)
        row = cursor.fetchone()

        # close communication with the database
        cursor.close()
        if not row:
                resp = jsonify({'message' : 'Bad Request - could not create user'})
                resp.status_code = 400
                return resp
                
        else:
            return jsonify ({'message' : 'Expense successfully created',
                        'expense' : {
                            "id": row[0],
                            "expenseName": row[1],
                            "expenseAMount": row[2]
                        }
                    })

     else:
        resp = jsonify({'message' : 'User already exists'})
        resp.status_code = 400
        return resp

####################Test tabla DB types
@app.route('/Type', methods=['GET'])
def getType():
     print("a")
     typeColumnNames = ["id_type","type_name","band","country","rate","date_to_start","date_to_finish"]
     typeInDb =[]
     cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
     sql = "SELECT * FROM type"
     cursor.execute(sql)
     expenses = cursor.fetchall()
     for row in expenses:
         expenseDic = dict(zip(typeColumnNames, row))
         typeInDb.append(expenseDic)
     cursor.close()
     #print(expensesInDb)
     resp = jsonify(typeInDb)
     return resp



#Implementacion con SQLAlchemy
# Base = declarative_base()

# # mappear renglones de una DB a objetos
# class Usuario(Base):
#     # agregamos los campos donde se mapearan las columnas de la db
#     tablename = "type_Of_expense"
#     id = Column(Integer, primary_key=True)
#     expensesNames = Column(String(150))
#     expensesAmount = Column(Double(100))

#     # objeto engine para la conexión
#     engine = create_engine('ibm_dbsa://db2inst1:hola@localhost:50000/testdb')
#     session = Session(engine)

#     #hacer query
#     stmt = select(expensesNames).where(Usuario.email.in(["a@a.com"]))
#     for user in session.scalars(stmt):
#         print(user.email)
#         print(user.token)