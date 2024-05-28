import json
import itertools
import requests
from nanoid import generate


class ConvertorHandler:
    """ConvertorHandler class is responsible for converting the graphical model to the EMF model."""

    def __init__(self):
        self.url = "http://emf-cloud-service:8081/api/v2"
        self.meta_model_loc = self.__init_meta_model_location()
        self.root_type = "Specification"
        self.workflow = []
        self.workflow_tasks_dict = {}
        self.task_variant_map = {}
        self.experiment_space = []
        self.primitive_types = []
        self.primitive_types_map = {
            "integer": "NUMBER",
            "real": "NUMBER",
            "string": "STRING",
            "boolean": "BOOLEAN",
            "blob": "BLOB",
        }

    def __init_meta_model_location(self):
        """Get the location of the meta model in the server."""

        response = requests.get(
            f"{self.url}/models?modeluri=Generic.workflow", timeout=5
        )
        location = response.json()["data"]["$type"].split("#//")[0]
        return f"{location}#//"

    def __clear_maps(self):
        """Clear the maps for the next conversion."""
        self.workflow = []
        self.workflow_tasks_dict = {}
        self.task_variant_map = {}
        self.experiment_space = []
        self.primitive_types = []

    def convert(self, exp):
        """Convert the graphical model to the EMF model."""

        self.__clear_maps()
        self.workflow = [{"$id": "workflow-0", "name": "main", "node": [], "link": []}]
        self.workflow[0] = self.__convert_workflow(
            exp["graphical_model"], self.workflow[0]
        )
        deployed_workflow_combinations = self.__compute_deployed_workflow_combinations()
        deployed_workflows = self.__generate_all_deployed_workflows(
            deployed_workflow_combinations
        )

        emf_model = {
            "$type": self.__emf_object_type(self.root_type),
            "parametertypes": self.primitive_types,
            "workflow": self.workflow,
            "deployedworkflow": deployed_workflows,
            "experimentspace": self.experiment_space,
        }

        data = json.dumps({"data": emf_model})

        # avoid name conflicts
        exp_name = f"{exp['name']}-{generate(size=3)}.workflow"

        post_response = requests.post(
            f"{self.url}/models",
            params={"modeluri": exp_name},
            data=data,
            timeout=5,
        )

        response_json = post_response.json()

        if response_json["type"] != "success":
            return {
                "success": False,
                "error": "There is something wrong with the converted model.",
            }

        emf_model = response_json["data"]
        xmi_model = self.__get_xmi_model(exp_name)["data"]

        requests.delete(f"{self.url}/models", params={"modeluri": exp_name}, timeout=5)

        return {"success": True, "data": {"json": emf_model, "xmi": xmi_model}}

    def __convert_workflow(self, graphical_model, workflow):
        """Convert the workflow structure"""

        nodes = graphical_model["nodes"]
        links = graphical_model["edges"]
        node_type_map = {}

        for node in nodes:
            emf_node = {}
            node_type = node["type"]
            if node_type == "start":
                emf_node = {
                    "$type": f"{self.meta_model_loc}EventNode",
                    "$id": node["id"],
                }
            elif node_type == "end":
                emf_node = {
                    "$type": f"{self.meta_model_loc}EventNode",
                    "$id": node["id"],
                    "name": "END",
                }
            elif node_type == "task":
                emf_node = self.__convert_task_node_to_emf(workflow["$id"], node)
            elif node_type in ("opParallel", "opExclusive", "opInclusive", "opComplex"):
                emf_node = self.__convert_operator_node_to_emf(node, nodes, links)

            if emf_node:
                workflow["node"].append(emf_node)
                node_type_map[emf_node["$id"]] = emf_node["$type"]

        for link in links:
            source = link["source"]
            target = link["target"]
            link_type = link["type"]

            emf_link = {}

            if link_type in ("regular", "conditional", "exceptional"):
                emf_link = {
                    "$type": f"{self.meta_model_loc}RegularLink",
                    "$id": link["id"],
                    "output": {
                        "$type": node_type_map[source],
                        "$ref": source,
                    },
                    "input": {
                        "$type": node_type_map[target],
                        "$ref": target,
                    },
                }
            workflow["link"].append(emf_link)

        return workflow

    def __convert_task_node_to_emf(self, workflow_id, node):
        """Convert the task node structure"""
        self.workflow_tasks_dict.setdefault(workflow_id, {})[node["id"]] = []

        emf_node = {
            "$type": f"{self.meta_model_loc}Task",
            "$id": node["id"],
            "name": node["id"],
        }

        for variant in node["data"]["variants"]:
            self.workflow_tasks_dict[workflow_id][node["id"]].append(variant["id_task"])
            self.task_variant_map[variant["id_task"]] = (
                variant  # both composite and non-composite tasks are added to the task map
            )

            if variant["is_composite"]:
                subflow = {
                    "$id": variant["id_task"],
                    "name": variant["name"],
                    "node": [],
                    "link": [],
                }
                self.workflow.append(
                    self.__convert_workflow(variant["graphical_model"], subflow)
                )

        return emf_node

    def __convert_operator_node_to_emf(self, node, nodes, links):
        """Convert the operator node structure"""

        # find number of incoming links:
        incoming_links = [link for link in links if link["target"] == node["id"]]
        if len(incoming_links) > 1:
            return {
                "$type": f"{self.meta_model_loc}{node['type'][2:].capitalize()}Join",
                "$id": node["id"],
            }

        if node["type"] == "opParallel":
            return {
                "$type": f"{self.meta_model_loc}Parallel",
                "$id": node["id"],
            }
        if node["type"] == "opComplex":
            return {
                "$type": f"{self.meta_model_loc}Complex",
                "$id": node["id"],
            }
        if node["type"] == "opExclusive":
            cases = []
            if len(node["data"]["conditions"]) > 0:
                cases = self.__convert_cases(node["data"]["conditions"][0], nodes)
            return {
                "$type": f"{self.meta_model_loc}Exclusive",
                "$id": node["id"],
                "condition": {
                    "$id": f"condition-{generate(size=5)}",
                    "cases": cases,
                },
            }
        return {
            "$type": f"{self.meta_model_loc}Inclusive",
            "$id": node["id"],
            "conditions": [
                {
                    "$id": f"condition-{generate(size=5)}",
                    "cases": self.__convert_cases(condition, nodes),
                }
                for condition in node["data"]["conditions"]
            ],
        }

    def __convert_cases(self, condition, nodes):
        """Convert the cases of the operator node."""
        return [
            {
                "$id": f"case-{generate(size=5)}",
                "case": case["condition"],
                "target": {
                    "$type": self.__find_node_emf_type(case["targetNodeId"], nodes),
                    "$ref": case["targetNodeId"],
                },
            }
            for case in condition["cases"]
        ]

    def __compute_deployed_workflow_combinations(self):
        """Compute all the possible combinations of the deployed workflows."""
        # Cartesian product of the tasks of each workflow
        return {
            workflow_id: list(itertools.product(*tasks.values()))
            for workflow_id, tasks in self.workflow_tasks_dict.items()
        }

    def __generate_deployed_workflow(self, workflow_id, tasks_dict):
        """Generate the deployed workflow."""

        deployed_workflow_id = f"deployedworkflow-{generate(size=5)}"

        parameter_list = [
            parameter
            for variant_id in tasks_dict.values()
            if variant_id in self.task_variant_map
            for parameter in self.task_variant_map[variant_id].get("parameters", [])
        ]

        self.experiment_space.append(
            self.__generate_experiment_space(deployed_workflow_id, parameter_list)
        )

        return {
            "$type": self.__emf_object_type("DeployedWorkflow"),
            "$id": deployed_workflow_id,
            "workflow": {
                "$type": self.__emf_object_type("Workflow"),
                "$ref": workflow_id,
            },
            "configuredtask": [
                {
                    "$id": f"configuredtask-{generate(size=5)}",
                    "name": self.task_variant_map[variant_id].get("name"),
                    "description": self.task_variant_map[variant_id].get("description"),
                    "implementationRef": self.task_variant_map[variant_id].get(
                        "implementationRef"
                    ),
                    "configuration": {
                        "$type": self.__emf_object_type("Task"),
                        "$ref": task_id,
                    },
                    "parameters": [
                        {
                            "$type": self.__emf_object_type("StaticParameter"),
                            "$id": deployed_workflow_id + parameter.get("id"),
                            "name": parameter.get("name"),
                            "type": self.__generate_primitive_type(
                                parameter.get("type")
                            ),
                        }
                        for parameter in self.task_variant_map[variant_id].get(
                            "parameters", []
                        )
                    ],
                }
                for task_id, variant_id in tasks_dict.items()
            ],
        }

    def __generate_all_deployed_workflows(self, deployed_workflow_combinations):
        """Generate all deployed workflows based on combinations."""
        deployed_workflows = []
        for workflow_id, combinations in deployed_workflow_combinations.items():
            for tasks in combinations:
                # get tasks key in the workflow_tasks_dict
                tasks_dict = dict(
                    zip(self.workflow_tasks_dict[workflow_id].keys(), tasks)
                )
                deployed_workflows.append(
                    self.__generate_deployed_workflow(workflow_id, tasks_dict)
                )
        return deployed_workflows

    def __generate_experiment_space(self, deployed_workflow_id, parameters):
        """Generate the experiment space."""

        parameter_domain = [
            {
                "$id": f"parameterdomain-{generate(size=10)}",
                "name": parameter.get("name"),
                "type": self.__generate_primitive_type(parameter.get("type")),
                "value": value,
                "staticparameter": {
                    "$type": self.__emf_object_type("StaticParameter"),
                    "$ref": deployed_workflow_id + parameter.get("id"),
                },
            }
            for parameter in parameters
            for value in parameter.get("values", [])
        ]

        return {
            "$id": f"experimentspace-{generate(size=10)}",
            "deployedworkflow": {
                "$type": self.__emf_object_type("DeployedWorkflow"),
                "$ref": deployed_workflow_id,
            },
            "parameterdomain": parameter_domain,
        }

    def __generate_primitive_type(self, type_name):
        """Generate the primitive type."""
        type_name = self.primitive_types_map.get(type_name, "STRING")

        if not self.__type_exists(type_name):
            self.primitive_types.append(
                {
                    "$type": self.__emf_object_type("PrimitiveType"),
                    "$id": f"primitive-{generate(size=3)}",
                    "type": type_name,
                    "name": type_name,
                }
            )
        for primitive in self.primitive_types:
            if primitive.get("type") == type_name:
                return {
                    "$type": self.__emf_object_type("PrimitiveType"),
                    "$ref": primitive["$id"],
                }

        return None

    def __type_exists(self, type_name):
        return any(
            primitive.get("type") == type_name for primitive in self.primitive_types
        )

    def __emf_object_type(self, type_name):
        """Get the EMF object $type for the given graphical component's type name."""
        return f"{self.meta_model_loc}{type_name}"

    def __get_xmi_model(self, exp_name):
        """Get the XMI model from the EMF server."""
        response = requests.get(
            f"{self.url}/models?modeluri={exp_name}&format=xmi", timeout=5
        )
        return {"success": response.status_code == 200, "data": response.json()["data"]}

    # def __is_model_exists(self, exp_name):
    #     """Check if the model already exists in the server."""
    #     response = requests.get(f"{self.url}/modeluris", timeout=5)
    #     uri_list = response.json()["data"]
    #     return exp_name in uri_list

    def __find_node_emf_type(self, node_id, nodes):
        """Convert the model type to the EMF type."""
        # find node from the nodes
        if not node_id:
            return ""
        node = next((node for node in nodes if node["id"] == node_id), None)
        type_map = {
            "start": "EventNode",
            "end": "EventNode",
            "task": "Task",
            "opParallel": "Parallel",
            "opExclusive": "Exclusive",
            "opInclusive": "Inclusive",
            "opComplex": "Complex",
        }

        return self.__emf_object_type(type_map.get(node["type"], None))


convertorHandler = ConvertorHandler()
