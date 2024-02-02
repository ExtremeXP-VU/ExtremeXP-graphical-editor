import pymongo
import json
import time
import calendar
from dbClient import mongo_client


class ProjectHandler(object):
    def __init__(self):
        self.client = mongo_client
        self.db = self.client.experiments
        self.collection_project = self.db.project

    def get_projects(self, username):
        query = {"owner": username}
        documents = self.collection_project.find(query).sort(
            "update_at", pymongo.DESCENDING
        )
        # return documents in JSON format
        return json.loads(json.dumps(list(documents), default=str))

    def get_project(self, proj_id):
        query = {"id_project": proj_id}
        documents = self.collection_project.find(query)
        return json.loads(json.dumps(documents[0], default=str))

    def project_exists(self, proj_id):
        query = {"id_project": proj_id}
        documents = self.collection_project.find(query)
        for doc in documents:
            if doc["id_project"] == proj_id:
                return True
        return False

    def create_project(self, username, proj_name):
        create_time = calendar.timegm(time.gmtime())  # get current time in seconds
        proj_id = username + "-" + proj_name.replace(" ", "") + "-" + str(create_time)
        query = {
            "id_project": proj_id,
            "owner": username,
            "name": proj_name,
            "create_at": create_time,
            "update_at": create_time,
            "description": "This project has no description yet.",
        }
        self.collection_project.insert_one(query)
        return proj_id

    # FIXME: bad implementation
    def detect_duplicate(self, username, proj_name):
        query = {"owner": username}
        documents = self.collection_project.find(query)
        for doc in documents:
            if doc["name"] == proj_name:
                return True
        return False

    def update_project_info(self, proj_id, proj_name, description):
        update_time = calendar.timegm(time.gmtime())
        query = {"id_project": proj_id}
        new_values = {
            "$set": {
                "name": proj_name,
                "description": description,
                "update_at": update_time,
            }
        }
        self.collection_project.update_one(query, new_values)
        return True

    def delete_project(self, proj_id):
        query = {"id_project": proj_id}
        self.collection_project.delete_one(query)
        return True

    def update_project_update_at(self, proj_id):
        update_time = calendar.timegm(time.gmtime())
        query = {"id_project": proj_id}
        new_values = {"$set": {"update_at": update_time}}
        self.collection_project.update_one(query, new_values)
        return True


projectHandler = ProjectHandler()
