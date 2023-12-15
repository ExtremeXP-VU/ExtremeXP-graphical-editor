# User Authentication Server

## Endpoints HTTP

| API               | Method |                           Payload                            | Description                            | Status Code                                                    |
| :---------------- | :----: | :----------------------------------------------------------: | :------------------------------------- | :------------------------------------------------------------- |
| /users/           |  GET   |                              /                               | List existing users in database        | 200: OK, <br> 404: Error                                       |
| /users/create     |  POST  |             {"username": "", <br>"password": ""}             | create a user account                  | 201: Created, <br> 409: Duplicated                             |
| /users/update     |  PUT   | {"username":"",<br>"old-password":"", <br>"new-password":""} | Update passowrd                        | 200: updated, <br> 403: Forbidden                              |
| /users/login      |  POST  |               {"username": "", "password":""}                | Login and retrieve a JWT code          | 200: OK, <br> 403: Forbidden                                   |
| /users/validation |  GET   |                      params: [?jwt=...]                      | Validate login status and get username | 200: OK, <br> 401: Validation fail                             |
| /user/delete      | DELETE |               {"username": "", "password":""}                | Delete a user account                  | 204: Deleted, <br> 403: Fobbiden, <br> 404: Username Not Found |
