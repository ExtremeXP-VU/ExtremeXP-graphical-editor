from flask import Flask, request, g
from flask_cors import CORS, cross_origin
from userAuthHandler import userAuthHandler

app = Flask(__name__)
cors = CORS(app) # cors is added in advance to allow cors requests
app.config['CORS_HEADERS'] = 'Content-Type'

ERROR_FORBIDDEN = "Error: Forbidden"

ENDPOINT_WITHOUT_AUTH = []

@app.before_request
def verify_user():
    if request.endpoint in ENDPOINT_WITHOUT_AUTH:
        return None
    # get token from header {'token': 'token'} 
    token = request.headers.get('token')
    if token is None:
        return {"error":ERROR_FORBIDDEN, "message": "token is not provided"}, 403
    auth_res = userAuthHandler.verify_user(token)
    if not auth_res['valid'] or auth_res['username'] is None:
        return {"error":ERROR_FORBIDDEN, "message": auth_res['error_type']}, 403
    g.username = auth_res['username']

@app.route('/exp/', methods=["GET"])
@cross_origin()
def index():
    return "experiment service connected"




