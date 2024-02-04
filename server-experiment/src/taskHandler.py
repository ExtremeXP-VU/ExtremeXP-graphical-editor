import json
import time
import calendar
from dbClient import mongo_client


class TaskHandler(object):
    def __init__(self):
        self.client = mongo_client
        self.db = self.client.tasks
        self.collection_task = self.db.task
        if self.collection_task.count_documents({}) == 0:
            with open("../tasks/official_tasks.json") as f:
                data = json.load(f)
                for task in data["task"]:
                    self.collection_task.insert_one(task)
                f.close()

    def get_official_tasks_by_category(self, category_id):
        query = {"category_id": category_id, "is_user_defined": False}
        documents = self.collection_task.find(query)
        return json.loads(json.dumps(list(documents), default=str))

    def get_tasks(self, category_id, username):
        query = {"category_id": category_id, "owner": username}
        documents = self.collection_task.find(query)

        official_tasks = self.get_official_tasks_by_category(category_id)
        user_tasks = json.loads(json.dumps(list(documents), default=str))

        # tasks = (official_tasks + user_tasks).sort(
        #     key=lambda x: x["update_at"], reverse=True
        # )
        tasks = official_tasks + user_tasks
        return tasks

    def task_exists(self, task_id):
        query = {"id_task": task_id}
        documents = self.collection_task.find(query)
        for doc in documents:
            if doc["id_task"] == task_id:
                return True
        return False

    def get_task(self, task_id):
        query = {"id_task": task_id}
        documents = self.collection_task.find(query)
        return json.loads(json.dumps(documents[0], default=str))

    def create_task(self, username, category_id, task_name, provider, graphical_model):
        create_time = calendar.timegm(time.gmtime())
        task_id = username + "-" + task_name.replace(" ", "") + "-" + str(create_time)
        query = {
            "id_task": task_id,
            "name": task_name,
            "category_id": category_id,
            "is_user_defined": True,
            "owner": username,
            "provider": provider,
            "description": "This task has no description yet.",
            "create_at": create_time,
            "update_at": create_time,
            "graphical_model": graphical_model,
        }
        self.collection_task.insert_one(query)

        return task_id

    def delete_task(self, task_id):
        query = {"id_task": task_id}
        self.collection_task.delete_one(query)

    def delete_tasks(self, category_id):
        query = {"category_id": category_id}
        self.collection_task.delete_many(query)

    # FIXME: bad implementation
    def detect_duplicate(self, category_id, task_name):
        query = {"category_id": category_id, "name": task_name}
        documents = self.collection_task.find(query)
        for doc in documents:
            if doc["name"] == task_name:
                return True
        return False

    def update_task_info(self, task_id, task_name, task_description):
        update_time = calendar.timegm(time.gmtime())
        query = {"id_task": task_id}
        new_values = {
            "$set": {
                "name": task_name,
                "description": task_description,
                "update_at": update_time,
            }
        }
        self.collection_task.update_one(query, new_values)

        return True

    def update_task_graphical_model(self, task_id, graphical_model):
        update_time = calendar.timegm(time.gmtime())
        query = {"id_task": task_id}
        new_values = {
            "$set": {"graphical_model": graphical_model, "update_at": update_time}
        }
        self.collection_task.update_one(query, new_values)

        return True


taskHandler = TaskHandler()
