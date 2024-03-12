import requests


class ConvertorHandler(object):
    def __init__(self):
        self.url = "http://emf-cloud-service:8081/api/v2"

    def get_json_model(self, exp_name):
        url = self.url + "/models?modeluri=" + exp_name
        r = requests.get(url=url)
        status = r.status_code
        data = r.json()
        if status == 200:
            model = data["data"]
            return {"success": True, "data": model}
        else:
            return {"success": False}

    def get_xmi_model(self, exp_name):
        url = self.url + "/models?modeluri=" + exp_name + "&format=xmi"
        r = requests.get(url=url)
        status = r.status_code
        data = r.json()
        if status == 200:
            model = data["data"]
            return {"success": True, "data": model}
        else:
            return {"success": False}

    def convert(self, exp):
        exp_name = exp["name"]
        exp_model = exp["graphical_model"]
        json_model = self.get_json_model("Generic.workflow")
        if json_model["success"]:
            json_model = json_model["data"]
            xmi_model = self.get_xmi_model("Generic.workflow")
            xmi_model = xmi_model["data"]
            return {"verified": True, "data": {"json": json_model, "xmi": xmi_model}}
        else:
            return {"verified": False, "error": "Model did not pass validation."}


convertorHandler = ConvertorHandler()
