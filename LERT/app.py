from flask import Flask, jsonify, request, session, send_from_directory
from flask_restful import Api, Resource, reqparse
#library for encrypting
from werkzeug.security import generate_password_hash, check_password_hash
#from flask_cors import CORS #pip install -U flask-cors
from datetime import timedelta
import psycopg2
import psycopg2.extras

from flask_cors import CORS #comment this on deployment
from backend.HelloApiHandler import HelloApiHandler
from backend.login import login

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')


app.config['SECRET_KEY'] = 'lert-teamafk'

app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=10)
CORS(app)

DB_HOST = "localhost"
DB_NAME = "lert"
DB_USER = "postgres"
DB_PASS = "password" #en el video pone admin

conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST)


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
                return jsonify ({'message' : 'You are logged in successfully',
                    'user' : {
                        "Id_user": row[0],
                        "FullName": row[1],
                        "Mail": row[2],
                        "Rol": row[4]
                    }
                })
            else:
                resp = jsonify({'message' : 'Bad Request - invalid password'})
                resp.status_code = 400
                return resp


    else:
        resp = jsonify({'message' : 'Bad Request - invalid credentials'})
        resp.status_code = 400
        return resp

@app.route('/logout')
def logout():
    if 'username' in session:
        session.pop('username', None)
    return jsonify({'message':'You successfully logged out'})

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
    return None

####################Test tabla DB expeses type
@app.route('/expensesTypes', methods=['GET'])
def getExpensesTypes():
     print("ALO CAGADA")
     cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
     sql = "SELECT * FROM Type_Of_Espense"
     cursor.execute(sql)
     expenses = cursor.fetchall()
     cursor.close()
     resp = jsonify({expenses})
     return resp