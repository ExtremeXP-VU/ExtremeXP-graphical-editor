from flask import Flask, request
from flask_cors import CORS, cross_origin
from apiHandler import apiHandler
from jwtHandler import jwtHandler

app = Flask(__name__)
cors = CORS(app) # cors is added in advance to allow cors requests
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/users/', methods=["GET"])
@cross_origin()
def index():
    return apiHandler.get_users()

@app.route('/users/create', methods=["POST"])
@cross_origin()
def post_user():
    if request.method == 'POST':
        get_data = request.get_json() # get_data gets the body of post request
        username = get_data['username']
        password = get_data['password']
        if len(username) < 1 or len(password) < 1 :
            return {"message": "invalid username or password"}, 403
        if apiHandler.user_exists(username):
            return {"message": "user already exists"}, 409
        apiHandler.handle_register(username, password)
        return {"message": "account created"}, 201
        
@app.route('/users/update', methods=["PUT"])
@cross_origin()
def update_password(): 
    get_data = request.get_json()
    username = get_data['username']
    old_password = get_data['old-password']
    new_password = get_data['new-password']
    if not apiHandler.user_exists(username):
        return {"message": "username does not exist"}, 403
    if not apiHandler.password_validated(username, old_password):
        return {"message": "old password is not valid"}, 403
    apiHandler.handle_password_update(username, new_password)
    return {"message": "password changed"}, 200

@app.route('/users/login', methods=["POST"])
@cross_origin()
def handle_login():
    if request.method == 'POST':
        get_data = request.get_json()
        username = get_data['username']
        password = get_data['password']
        if not apiHandler.user_exists(username):
            return {"message": "username does not exist"}, 403
        if not apiHandler.password_validated(username, password):
            return {"message": "password is not valid"}, 403
        jwt = jwtHandler.generate_jwt(username)
        return {"message": "Login Success", "data":{"jwt": jwt}}, 200

@app.route('/users/validation', methods=["GET"])
@cross_origin()
def validation_check():
    get_data=request.args.to_dict()
    token = get_data['jwt']
    verify_result = apiHandler.verify_signiture(token)
    if verify_result["verified"]:
        return {"message": "Authentication Successful", "data": {"name": verify_result["username"]}}, 200
    else:
        return {"message": "Authentication Failed", "type": verify_result["message"]}, 401
    
@app.route('/users/delete', methods=["DELETE"])
@cross_origin()
def handle_deletion():
    get_data = request.get_json()
    username = get_data['username']
    password = get_data['password']
    if not apiHandler.user_exists(username):
        return {"message": "username does not exist"}, 404
    if not apiHandler.password_validated(username, password):
        return {"message": "password is not valid"}, 403
    apiHandler.handle_deletion(username)
    return {"message": "account deleted"}, 204

