from flask import Flask, request, g
from flask_cors import CORS, cross_origin
from userAuthHandler import userAuthHandler
from experimentHandler import experimentHandler

app = Flask(__name__)
cors = CORS(app) # cors is added in advance to allow cors requests
app.config['CORS_HEADERS'] = 'Content-Type'

ERROR_FORBIDDEN = "Error: Forbidden"
ERROR_DUPLICATE = "Error: Duplicate experiment name"

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

@app.after_request
def after_request(response):
    # to enable cors response
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

@app.route('/exp/', methods=["GET"])
def index():
    return "experiment service connected"

@app.route('/exp/experiments', methods=["GET"])
def get_experiments():
    experiments = experimentHandler.get_experiments(g.username)
    return experiments, 200

@app.route('/exp/experiments/create/', methods=["POST"])
def create_experiment():
    exp_name = request.json['exp_name']
    if experimentHandler.detect_duplicate(g.username, exp_name):
        return {"error": ERROR_DUPLICATE, "message": "Experiment name already exists"}, 409
    else:
        res = experimentHandler.create_experiment(g.username, exp_name)
        return {"id_experiment": res}, 201
        



