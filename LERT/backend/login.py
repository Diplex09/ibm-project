from flask_restful import Api, Resource, reqparse
#from wekzeug.security import generate_password_hash, check_password_hash


class login(Resource):
    def dashboard(self):
        passhash = generate_password_hash('cairocoders')
        print(passhash)
        return passhash 



    if __name__ == "__main__":
        app.run()




 