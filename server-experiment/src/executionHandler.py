# import requests
# import pymongo
# import json
import pandas as pd
from dbClient import mongo_client


class ExecutionHandler(object):
    def __init__(self):
        self.client = mongo_client
        # self.db = self.client.experiments
        # self.collection_specification = self.db.specification

    def execute_experiment(self, graphical_model):
        print(graphical_model)
        file = "../data/manufacturing.csv"
        df = pd.read_csv(file)
        avg_yield = df["Yield"].mean()
        return avg_yield


executionHandler = ExecutionHandler()
