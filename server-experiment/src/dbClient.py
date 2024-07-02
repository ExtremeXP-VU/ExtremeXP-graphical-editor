# settings of mongoDB client
import pymongo

username = "admin"
password = "admin"

mongo_client = pymongo.MongoClient(
    "mongodb://{user}:{pwd}@mongo:27017/".format(user=username, pwd=password)
)
