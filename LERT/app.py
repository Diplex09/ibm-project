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
from backend.DB_Connections.dbExpenseType import deleteExpenseType, getExpensesTypes, postExpenseType
from backend.DB_Connections.dbtypes import getTypes, postType, deleteType, updateType
from backend.DB_Connections.dbHours import getHours, postHours, deleteHour, updateHour
from backend.DB_Connections.dbEmployee import getEmployees, deleteEmployee, newPostEmployee, updateEmployee



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
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original response
        return response

#/login 
@app.route("/")
@jwt_required()
def home():
    identity=get_jwt_identity()
    return jsonify({'message' : 'You are already logged in','uid': identity})
       

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

# api.add_resource(login, '/login')

## ADMIN ACTIONS
@app.route('/create_user', methods=['POST'])
@jwt_required()
def create_user():
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

@app.route('/delete_user', methods=["DELETE"])
@jwt_required()
def delete_user():
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

####################Test tabla DB expeses type

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

app.add_url_rule("/getEmployees", view_func=getEmployees, methods=['GET'])
app.add_url_rule("/deleteEmployees/<int:id>", view_func=deleteEmployee, methods=['DELETE'])
app.add_url_rule("/newPostEmployee", view_func=newPostEmployee, methods=['POST'])
app.add_url_rule("/updateEmployees/<int:id>", view_func=updateEmployee, methods=['PUT'])










