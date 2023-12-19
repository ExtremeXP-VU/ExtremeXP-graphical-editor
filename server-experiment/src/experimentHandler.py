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
        documents = self.collection_experiment.find(query).sort(
            "update_at", pymongo.DESCENDING
        )
        # return documents in JSON format
        return json.loads(json.dumps(list(documents), default=str))

    def create_experiment(self, username, exp_name):
        create_time = calendar.timegm(time.gmtime())  # get current time in seconds
        exp_id = username + "-" + exp_name.replace(" ", "") + "-" + str(create_time)
        query = {
            "id_experiment": exp_id,
            "owner": username,
            "name": exp_name,
            "create_at": create_time,
            "update_at": create_time,
            "description": "This experiment has no description yet.",
        }
        self.collection_experiment.insert_one(query)
        return exp_id

    # FIXME: bad implementation
    def detect_duplicate(self, username, exp_name):
        query = {"owner": username}
        documents = self.collection_experiment.find(query)
        for doc in documents:
            if doc["name"] == exp_name:
                return True
        return False

    def update_experiment_info(self, exp_id, exp_name, description):
        update_time = calendar.timegm(time.gmtime())
        query = {"id_experiment": exp_id}
        new_values = {
            "$set": {
                "name": exp_name,
                "description": description,
                "update_at": update_time,
            }
        }
        self.collection_experiment.update_one(query, new_values)
        return True

    def delete_experiment(self, exp_id):
        query = {"id_experiment": exp_id}
        self.collection_experiment.delete_one(query)
        return True

    def update_experiment_update_at(self, exp_id):
        update_time = calendar.timegm(time.gmtime())
        query = {"id_experiment": exp_id}
        new_values = {"$set": {"update_at": update_time}}
        self.collection_experiment.update_one(query, new_values)
        return True


experimentHandler = ExperimentHandler()
