# Experiment Server

## Endpoints HTTP

All the endpoints HTTP repquest requires params`token` for user authentication:

```http
// example specification create request

Method: POST
URL: http://localhost:5050/exp/experiments/admin-testexp-1702808175/specifications/create?token=eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJuYW1lIjogImFkbWluIiwgImV4cCI6IDE3MDM3MDUwNDh9.xW6cmsO7DVJZ7q2Y_gHROKw9Z7lAUgR2S_8voz8DyVQ
data: {
    "spec_name": "test specification"
}
```

| API                                                                       | Method | Payload                                                                     | Description                                  | Status Code                            |
| :------------------------------------------------------------------------ | :----: | :-------------------------------------------------------------------------- | :------------------------------------------- | :------------------------------------- |
| /exp/experiments                                                          |  GET   | /                                                                           | List existing experiments belong to the user | 200: OK, <br> 404: Error               |
| /exp/experiments/create                                                   |  POST  | {"exp_name": \<experiment name>}                                            | Create a new experiment                      | 201: Created, <br> 409: Duplicated     |
| /exp/experiments/<exp_id>/update                                          |  PUT   | {"exp_name": \<experiment name>, "description": \<description>}             | Update experiment name and description       | 200: OK, <br> 409: Duplicate name      |
| /exp/experiments/<exp_id>/delete                                          | DELETE | /                                                                           | Delete experiment and related specifications | 204: Deleted <br> 404: Not found       |
| /exp/experiments/<exp_id>/specifications                                  |  GET   | /                                                                           | Get all specifications under an experiment   | 200: OK                                |
| /exp/experiments/specifications/<spec_id>                                 |  GET   | /                                                                           | Get one specification via specification ID   | 200: OK                                |
| /exp/experiments/<exp_id>/specifications/create                           |  POST  | {"spec_name": \<specification name>, "graphical_model": \<graphical model>} | Create a new specification                   | 201: Created, <br> 409: Duplicate name |
| /exp/experiments/<exp_id>/specifications/<spec_id>/delete                 | DELETE | /                                                                           | Delete a specification                       | 204: Deleted, <br> 404: Not found      |
| /exp/experiments/<exp_id>/specifications/<spec_id>/update/name            |  PUT   | {"spec_name": \<new specification name>}                                    | Update specification name                    | 200: OK, <br> 409: Duplicate name      |
| /exp/experiments/<exp_id>/specifications/<spec_id>/update/graphical_model |  PUT   | {"graphical_model": \<graphical model>}                                     | Update specification graphical model         | 200: OK                                |
