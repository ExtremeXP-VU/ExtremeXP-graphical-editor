import calendar
import json
import time
import pymongo
from dbClient import mongo_client


class CategoryHandler:
    def __init__(self):
        self.client = mongo_client
        self.db = self.client.tasks
        self.collection_category = self.db.category
        if self.collection_category.count_documents({}) == 0:
            with open("../tasks/official_tasks.json") as f:
                data = json.load(f)
                for category in data["category"]:
                    self.collection_category.insert_one(category)
                f.close()

    def get_official_categories(self):
        query = {"is_official": True}
        documents = self.collection_category.find(query)
        return json.loads(json.dumps(list(documents), default=str))

    def get_categories(self, username):
        query = {"owner": username}
        documents = self.collection_category.find(query)
        # combine official categories with user's categories
        official_categories = self.get_official_categories()
        user_categories = json.loads(json.dumps(list(documents), default=str))

        categories = official_categories + user_categories
        return categories

    def get_category(self, category_id):
        query = {"id_category": category_id}
        documents = self.collection_category.find(query)
        return json.loads(json.dumps(documents[0], default=str))

    def category_exists(self, category_id):
        query = {"id_category": category_id}
        documents = self.collection_category.find(query)
        for doc in documents:
            if doc["id_category"] == category_id:
                return True
        return False

    def create_category(self, username, category_name):
        create_time = calendar.timegm(time.gmtime())
        category_id = "category-" + username + "-" + str(create_time)
        query = {
            "id_category": category_id,
            "name": category_name,
            "is_official": False,
            "owner": username,
        }
        self.collection_category.insert_one(query)
        return category_id

    # FIXME: bad implementation
    def detect_duplicate(self, username, category_name):
        query = {"owner": username}
        documents = self.collection_category.find(query)
        for doc in documents:
            if doc["name"] == category_name:
                return True
        return False

    def update_category_name(self, category_id, category_name):
        query = {"id_category": category_id}
        new_values = {
            "$set": {
                "name": category_name,
            }
        }
        self.collection_category.update_one(query, new_values)
        return True

    def delete_category(self, category_id):
        query = {"id_category": category_id}
        self.collection_category.delete_one(query)
        return True


categoryHandler = CategoryHandler()
