import requests
import pymongo
import json
import time
import calendar
from dbClient import mongo_client
from projectHandler import projectHandler


class ExperimentHandler(object):
    def __init__(self):
        self.client = mongo_client
        self.db = self.client.experiments
        self.collection_experiment = self.db.experiment

    def get_experiments(self, proj_id):
        query = {"project_id": proj_id}
        documents = self.collection_experiment.find(query).sort(
            "update_at", pymongo.DESCENDING
        )
        # return documents in JSON format
        return json.loads(json.dumps(list(documents), default=str))

    def experiment_exists(self, exp_id):
        query = {"id_experiment": exp_id}
        documents = self.collection_experiment.find(query)
        for doc in documents:
            if doc["id_experiment"] == exp_id:
                return True
        return False

    def get_experiment(self, exp_id):
        query = {"id_exp": exp_id}
        documents = self.collection_experiment.find(query)
        return json.loads(json.dumps(documents[0], default=str))

    def create_experiment(self, username, proj_id, exp_name, graphical_model):
        create_time = calendar.timegm(time.gmtime())  # get current time in seconds
        exp_id = username + "-" + exp_name.replace(" ", "") + "-" + str(create_time)
        query = {
            "id_experiment": exp_id,
            "project_id": proj_id,
            "name": exp_name,
            "create_at": create_time,
            "update_at": create_time,
            "graphical_model": graphical_model,
        }
        self.collection_experiment.insert_one(query)

        projectHandler.update_project_update_at(proj_id)
        return exp_id

    def delete_experiment(self, exp_id, proj_id):
        query = {"id_experiment": exp_id}
        self.collection_experiment.delete_one(query)

        projectHandler.update_project_update_at(proj_id)

    def delete_experiments(self, proj_id):
        query = {"project_id": proj_id}
        self.collection_experiment.delete_many(query)

    # FIXME: bad implementation
    def detect_duplicate(self, proj_id, exp_name):
        query = {"project_id": proj_id, "name": exp_name}
        documents = self.collection_experiment.find(query)
        for doc in documents:
            if doc["name"] == exp_name:
                return True
        return False

    def update_experiment_name(self, exp_id, proj_id, exp_name):
        update_time = calendar.timegm(time.gmtime())
        query = {"id_experiment": exp_id}
        new_values = {"$set": {"name": exp_name, "update_at": update_time}}
        self.collection_experiment.update_one(query, new_values)

        projectHandler.update_project_update_at(proj_id)
        return True

    def update_experiment_graphical_model(self, exp_id, proj_id, graphical_model):
        update_time = calendar.timegm(time.gmtime())
        query = {"id_experiment": exp_id}
        new_values = {
            "$set": {"graphical_model": graphical_model, "update_at": update_time}
        }
        self.collection_experiment.update_one(query, new_values)

        projectHandler.update_project_update_at(proj_id)
        return True


experimentHandler = ExperimentHandler()
