"""
The implementation of the execution handler is for demo purposes only.
It is not the final implementation of the execution handler as the result of the thesis.
"""

import os
import pandas as pd
from dbClient import mongo_client


class ExecutionHandler(object):
    def __init__(self):
        self.client = mongo_client
        # self.db = self.client.experiments
        # self.collection_specification = self.db.specification

    def execute_experiment(self, graphical_model):
        if not self.is_task_node_exist(graphical_model):
            return {"verified": False, "error": "Task does not exist."}

        if not self.exists_at_least_two_data_nodes(graphical_model):
            return {"verified": False, "error": "Missing input or output data node."}

        file_name = self.get_input_file_name(graphical_model)
        file_path = os.path.join("..", "data", file_name)
        if not os.path.exists(file_path):
            return {"verified": False, "error": "Input data file does not exist."}
        df = pd.read_csv(file_path)

        input_field = self.get_input_field(graphical_model)

        # check if input field exists in input file
        if input_field not in df.columns:
            return {"verified": False, "error": "Input field does not exist."}

        try:
            if self.get_operation(graphical_model) == "mean":
                result = df[input_field].mean()
            elif self.get_operation(graphical_model) == "sum":
                result = df[input_field].sum()
            elif self.get_operation(graphical_model) == "min":
                result = df[input_field].min()
            elif self.get_operation(graphical_model) == "max":
                result = df[input_field].max()
        except Exception as e:
            print(f"Error calculating result: {e}")
            return {"verified": False, "error": "Error calculating result."}

        output_file_name = self.get_output_file_name(graphical_model)
        output_field = self.get_output_field(graphical_model)
        output_file_path = os.path.join("..", "data", output_file_name)

        df_output = pd.DataFrame({output_field: [result]})
        try:
            df_output.to_csv(output_file_path, index=False)
        except Exception as e:
            print(f"Error writing output file: {e}")

        json_data = df_output.to_json(orient="records")

        return {"verified": True, "result": json_data, "filename": output_file_name}

    def get_input_file_name(self, graphical_model):
        # from the first data node get "name"
        data_nodes = [
            node for node in graphical_model["nodes"] if node.get("type") == "data"
        ]
        if len(data_nodes) > 0:
            return data_nodes[0]["data"].get("name", "")
        return ""

    def get_input_field(self, graphical_model):
        data_nodes = [
            node for node in graphical_model["nodes"] if node.get("type") == "data"
        ]
        if len(data_nodes) > 0:
            return data_nodes[0]["data"].get("field", "")
        return ""

    def get_operation(self, graphical_model):
        task_node = next(
            (node for node in graphical_model["nodes"] if node.get("type") == "task"),
            None,
        )
        if task_node:
            operation_value = task_node["data"].get("operation", "mean")
            return operation_value
        return "mean"

    def get_output_field(self, graphical_model):
        data_nodes = [
            node for node in graphical_model["nodes"] if node.get("type") == "data"
        ]
        if len(data_nodes) > 0:
            return data_nodes[1]["data"].get("field", "result")
        return "result"

    def get_output_file_name(self, graphical_model):
        data_nodes = [
            node for node in graphical_model["nodes"] if node.get("type") == "data"
        ]
        if len(data_nodes) > 0:
            return data_nodes[1]["data"].get("name", "output.csv")
        return "output.csv"

    def is_task_node_exist(self, graphical_model):
        task_node = next(
            (node for node in graphical_model["nodes"] if node.get("type") == "task"),
            None,
        )
        if task_node:
            return True
        return False

    def exists_at_least_two_data_nodes(self, graphical_model):
        data_nodes = [
            node for node in graphical_model["nodes"] if node.get("type") == "data"
        ]
        if len(data_nodes) > 1:
            return True
        return False


executionHandler = ExecutionHandler()
