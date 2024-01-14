# import requests
# import pymongo
import json
import os
import pandas as pd
from dbClient import mongo_client


class ExecutionHandler(object):
    def __init__(self):
        self.client = mongo_client
        # self.db = self.client.experiments
        # self.collection_specification = self.db.specification

    def execute_experiment(self, graphical_model):
        file_name = self.getInputFileName(graphical_model)
        file_path = os.path.join("..", "data", file_name)
        df = pd.read_csv(file_path)

        input_field = self.getInputField(graphical_model)

        if self.getOperation(graphical_model) == "mean":
            result = df[input_field].mean()
        elif self.getOperation(graphical_model) == "sum":
            result = df[input_field].sum()

        output_file_name = self.getOutputFileName(graphical_model)
        output_field = self.getOutputField(graphical_model)
        output_file_path = os.path.join("..", "data", output_file_name)

        df_output = pd.DataFrame({output_field: [result]})
        try:
            df_output.to_csv(output_file_path, index=False)
        except Exception as e:
            print(f"Error writing output file: {e}")

        json_data = df_output.to_json(orient="records")

        return json_data

    def getInputFileName(self, graphical_model):
        return "manufacturing.csv"

    def getInputField(self, graphical_model):
        return "Yield"

    def getOperation(self, graphical_model):
        task_node = next(
            (node for node in graphical_model["nodes"] if node.get("type") == "task"),
            None,
        )
        if task_node:
            operation_value = task_node["data"].get("operation", "mean")
            return operation_value
        return "mean"

    def getOutputField(self, graphical_model):
        return "result_yield"

    def getOutputFileName(self, graphical_model):
        return "manufacturing-output.csv"


executionHandler = ExecutionHandler()
