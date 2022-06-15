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
from HelloApiHandler import HelloApiHandler
from DB_Connections.dbUsers import delete_user
from login import login
from DB_Connections.dbExpenseType import deleteExpenseType, getExpensesTypes, postExpenseType
from DB_Connections.dbtypes import getTypes, postType, deleteType, updateType
from DB_Connections.dbHours import getHours, postHours, deleteHour, updateHour
from DB_Connections.dbEmployee import getEmployees, deleteEmployee, newPostEmployee, updateEmployee
from DB_Connections.dbUsers import all_users, create_user, edit_user, delete_user
from DB_Connections.dbIca import allICAs, postIca, deleteICA, updateICA
from DB_Connections.dbAllExpenses import getAllExpenses, newAllPostExpense, deleteAllExpense, updateExpense

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
api = Api(app)

app.config['CORS_HEADERS'] = 'Content-Type'
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
cors = CORS(app, origins=["http://localhost", "https://lert.mybluemix.net"])

DB_HOST = "localhost"
DB_NAME = "lert"
DB_USER = "postgres"
DB_PASS = "password" #en el video pone admin

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

        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
        
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original response
        return response

#/login 
@app.route("/")
# @jwt_required()
def home():
    
    # if identity:
    res = jsonify({'message' : 'You are already logged in','uid': 1})
    res.status_code = 200
    return res
       

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

                sql = "SELECT rol_name FROM roles WHERE rol_id=%s"
                sql_where = (row[4],)

                cursor.execute(sql, sql_where)
                rowRol = cursor.fetchone()

                cursor.close()

                response = jsonify({ 'msg': 'Login Successful', 'user' : {
                        "uid": row[0],
                        "fullName": row[1],
                        "rol": row[4],
                        "rolName": rowRol[0]
                    }})
                response.status_code = 200

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
    response = jsonify({'msg':'You successfully logged out'})
    unset_jwt_cookies(response)
    return response

# Check JWT
@app.route("/check")
@jwt_required()
def protected():
    uid = get_jwt_identity()
    cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

    sql = "SELECT * FROM users WHERE id_user=%s"
    sql_where = (uid,)

    cursor.execute(sql, sql_where)
    row = cursor.fetchone()

    sql = "SELECT rol_name FROM roles WHERE rol_id=%s"
    sql_where = (row[4],)
    cursor.execute(sql, sql_where)
    rowRol = cursor.fetchone()

    cursor.close()

    return jsonify({'msg' : 'Valid token', 'user' : {
                        "uid": row[0],
                        "fullName": row[1],
                        "rol": row[4],
                        "rolName": rowRol[0]
                    }})

api.add_resource(HelloApiHandler, '/flask/hello')

# Metodos Admin/Manager User
app.add_url_rule("/all_users", view_func=all_users, methods=['GET'])
app.add_url_rule("/create_users", view_func=all_users, methods=['GET', 'POST'])
app.add_url_rule("/edit_users", view_func=all_users, methods=['GET', 'PUT'])
app.add_url_rule("/all_users", view_func=all_users, methods=['GET', 'DELETE'])


#Metodos expensesTypes
app.add_url_rule("/expensesTypes", view_func=getExpensesTypes, methods=['GET'])
app.add_url_rule("/newExpenseType", view_func=postExpenseType, methods=['POST'])
app.add_url_rule("/delExpenseType/<string:name>", view_func=deleteExpenseType, methods=['DELETE'])

#Metodos types
app.add_url_rule("/getTypes", view_func=getTypes, methods=['GET'])
app.add_url_rule("/newPostType", view_func=postType, methods=['POST'])
app.add_url_rule("/deleteTypes/<int:id>", view_func=deleteType, methods=['DELETE'])
app.add_url_rule("/updateTypes/<int:id>", view_func=updateType, methods=['PUT'])

#Metodos extraHours
app.add_url_rule("/getHours", view_func=getHours, methods=['GET'])
app.add_url_rule("/newPostHour", view_func=postHours, methods=['POST'])
app.add_url_rule("/deleteHours/<int:id>", view_func=deleteHour, methods=['DELETE'])
app.add_url_rule("/updateHours/<int:id>", view_func=updateHour, methods=['PUT'])

#Metodos employee
app.add_url_rule("/getEmployees", view_func=getEmployees, methods=['GET'])
app.add_url_rule("/deleteEmployees/<int:id>", view_func=deleteEmployee, methods=['DELETE'])
app.add_url_rule("/newPostEmployee", view_func=newPostEmployee, methods=['POST'])
app.add_url_rule("/updateEmployees/<int:id>", view_func=updateEmployee, methods=['PUT'])

#Metodos ICAs
app.add_url_rule("/getICAs", view_func=allICAs, methods=['GET'])
app.add_url_rule("/postICA", view_func=postIca, methods=['GET', 'POST'])
app.add_url_rule("/deleteICA/<int:id>", view_func=deleteICA, methods=['DELETE'])
app.add_url_rule("/updateICA/<int:id>", view_func=updateICA, methods=['GET', 'PUT'])

#Metodos allExpenses
app.add_url_rule("/getExpenses", view_func=getAllExpenses, methods=['GET'])
app.add_url_rule("/newPostExpenses", view_func=newAllPostExpense, methods=['POST'])
app.add_url_rule("/deleteExpense/<int:id>", view_func=deleteAllExpense, methods=['DELETE'])
app.add_url_rule("/updateExpenses/<int:id>", view_func=updateExpense, methods=['PUT'])