from base64 import urlsafe_b64encode, urlsafe_b64decode
import hmac
import json
from dbClient import mongo_client
import calendar
import time

class JWTHandler(object):
    def __init__(self):
        self.client = mongo_client
        self.db = self.client.user_auth
        self.user_info = self.db.user_info
        # the algorithm used to generate the signature is HMAC SHA256
        self.header = {"alg": "HS256", "typ": "JWT"}
        # the secret key used to sign the JWT
        self.secret = "Group8Secret"
        self.file = open('../Config.json','r')
        self.config = json.load(self.file)
        self.file.close()
    
    # get the password of the user with the given username
    def get_password(self, username):
        query = {"username": username}
        document = self.user_info.find_one(query)
        if document == None:
            return None
        return document["password"]

    # encode header, payload, and signature respectively and generate corresponding JWT
    # reference: https://jwt.io/introduction/ , https://docs.python.org/3/library/hmac.html
    def generate_jwt(self, username):
        # the payload contains the subject's username, which is an immutable identifier for the user
        exp_timestamp = self.get_exp_timestamp()
        payload = {"name": "{}".format(username), "exp": exp_timestamp}
        password = self.get_password(username)
        dynamic_secret = self.secret + str(password)
        encoded_header = urlsafe_b64encode(json.dumps(self.header).encode()).decode().rstrip('=') 
        encoded_payload = urlsafe_b64encode(json.dumps(payload).encode()).decode().rstrip('=')
        # digest() returns the generated signature as a byte string
        signature = hmac.new(dynamic_secret.encode(), (encoded_header + "." + encoded_payload).encode(), "SHA256").digest()
        encoded_signature = urlsafe_b64encode(signature).decode().rstrip('=')
        return encoded_header + "." + encoded_payload + "." + encoded_signature

    # generate the expected signature in the form of byte string based on the username

    def generate_expected_signature(self, username, exp):
        payload = {"name": "{}".format(username), "exp": exp}
        password = self.get_password(username)
        dynamic_secret = self.secret + str(password)
        encoded_header = urlsafe_b64encode(json.dumps(self.header).encode()).decode().rstrip('=') 
        encoded_payload = urlsafe_b64encode(json.dumps(payload).encode()).decode().rstrip('=')
        signature = hmac.new(dynamic_secret.encode(), (encoded_header + "." + encoded_payload).encode(), "SHA256").digest()
        return signature
    
    # decode the base64url encoded string into a byte string
    def decode_base64url(self, encoded):
        return urlsafe_b64decode(encoded + "=" * (4 - len(encoded) % 4))
    
    # generate the current timestamp and calculate expired timesatmp 
    # reference: https://kb.narrative.io/what-is-unix-time#:~:text=Unix%20time%20is%20a%20way,and%20use%20across%20different%20systems.
    def get_exp_timestamp(self):
        current_GMT = time.gmtime()
        # convert the tuple format of current into the timestamp format
        current_timestamp = calendar.timegm(current_GMT)
        exp_period = self.config["exp-period"]
        return exp_period + current_timestamp

jwtHandler = JWTHandler()
# print(jwtHandler.generate_jwt("Yuna"))
# print(jwtHandler.generate_jwt("Fan"))
# print(jwtHandler.generate_jwt("Cai"))
# print(jwtHandler.generate_jwt("admin"))
