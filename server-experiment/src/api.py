from flask import Flask, request,g
from flask_cors import CORS, cross_origin
from userAuthHandler import userAuthHandler
from experimentHandler import experimentHandler

app = Flask(__name__)
cors = CORS(app) # cors is added in advance to allow cors requests
app.config['CORS_HEADERS'] = 'Content-Type'

ERROR_FORBIDDEN = "Error: Forbidden"
ERROR_DUPLICATE = "Error: Duplicate experiment name"

ENDPOINT_WITHOUT_AUTH = []

# there's a bug in flask_cors that headers is None when using before_request for OPTIONS request
@app.before_request
def verify_user():
    if request.endpoint in ENDPOINT_WITHOUT_AUTH:
        return None
    # get token from params {'token': 'token'} 
    token = request.args.get('token')
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
    response.headers['Access-Control-Allow-Headers'] = '*'
    response.headers['Access-Control-Allow-Methods'] = '*'
    return response

@app.route('/exp/', methods=["GET"])
@cross_origin()
def index():
    return "experiment service connected"

@app.route('/exp/experiments', methods=["GET"])
@cross_origin()
def get_experiments():
    experiments = experimentHandler.get_experiments(g.username)
    return {"message": "experiments retrieved", "data": {"experiments": experiments}}, 200

@app.route('/exp/experiments/create', methods=["OPTIONS", "POST"])
@cross_origin()
def create_experiment():
    print('heeeeeeere', flush=True)
    exp_name = request.json['exp_name']
    print('enter post method', flush=True)
    if experimentHandler.detect_duplicate(g.username, exp_name):
        return {"error": ERROR_DUPLICATE, "message": "Experiment name already exists"}, 409
    else:
        res = experimentHandler.create_experiment(g.username, exp_name)
    return {"id_experiment": res}, 201
        



