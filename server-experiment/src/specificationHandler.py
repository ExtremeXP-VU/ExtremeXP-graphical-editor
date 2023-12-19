import requests
import pymongo
import json
import time
import calendar
from dbClient import mongo_client
from experimentHandler import experimentHandler


class SpecificationHandler(object):
    def __init__(self):
        self.client = mongo_client
        self.db = self.client.experiments
        self.collection_specification = self.db.specification

    def get_specifications(self, exp_id):
        query = {"experiment_id": exp_id}
        documents = self.collection_specification.find(query).sort(
            "update_at", pymongo.DESCENDING
        )
        # return documents in JSON format
        return json.loads(json.dumps(list(documents), default=str))

    def specification_exists(self, spec_id):
        query = {"id_specification": spec_id}
        documents = self.collection_specification.find(query)
        for doc in documents:
            if doc["id_specification"] == spec_id:
                return True
        return False

    def get_specification(self, spec_id):
        query = {"id_specification": spec_id}
        documents = self.collection_specification.find(query)
        return json.loads(json.dumps(list(documents), default=str))

    def create_specification(self, username, exp_id, spec_name):
        create_time = calendar.timegm(time.gmtime())  # get current time in seconds
        spec_id = username + "-" + spec_name.replace(" ", "") + "-" + str(create_time)
        verification_code = "extremexp-graphical-model"
        query = {
            "id_specification": spec_id,
            "experiment_id": exp_id,
            "name": spec_name,
            "create_at": create_time,
            "update_at": create_time,
            "graphical_model": {
                "verification": verification_code,
                "nodes": [],
                "edges": [],
            },
        }
        self.collection_specification.insert_one(query)
        experimentHandler.update_experiment_update_at(exp_id)
        return spec_id

    def delete_specification(self, spec_id, exp_id):
        query = {"id_specification": spec_id}
        self.collection_specification.delete_one(query)
        experimentHandler.update_experiment_update_at(exp_id)

    def delete_specifications(self, exp_id):
        query = {"experiment_id": exp_id}
        self.collection_specification.delete_many(query)

    # FIXME: bad implementation
    def detect_duplicate(self, exp_id, spec_name):
        query = {"experiment_id": exp_id, "name": spec_name}
        documents = self.collection_specification.find(query)
        for doc in documents:
            if doc["name"] == spec_name:
                return True
        return False


specificationHandler = SpecificationHandler()
