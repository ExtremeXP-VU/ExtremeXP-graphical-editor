import requests
import pymongo
import json
import time
import calendar
from dbClient import mongo_client

class ExperimentHandler(object):
    def __init__(self):
        self.client = mongo_client
        self.db = self.client.experiments
        self.collection_experiment = self.db.experiment


    def get_experiments(self, username):
        query = {"owner": username}
        documents = self.collection_experiment.find(query).sort("update_at", pymongo.DESCENDING)
        # return documents in JSON format
        return json.loads(json.dumps(list(documents), default=str))

    # FIXME: bad implementation
    def detect_duplicate(self, username, exp_name):
        query = {"owner": username}
        documents = self.collection_experiment.find(query)
        for doc in documents:
            if doc['name'] == exp_name:
                return True
        return False

    def create_experiment(self, username, exp_name):
        create_time = calendar.timegm(time.gmtime()) # get current time in seconds
        exp_id = username + "-" + exp_name.replace(" ", "") + "-" + str(create_time)
        query = {"id_experiment": exp_id, "owner": username, 
                 "name": exp_name, "create_at": create_time, "update_at": create_time,
                 "specifications": [], "dataset": []}
        self.collection_experiment.insert_one(query)
        return exp_id
    
experimentHandler = ExperimentHandler()