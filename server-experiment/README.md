# Experiment Server

## Endpoints HTTP

All the endpoints HTTP repquest requires params`token` for user authentication:

```http
// example experiment create request

Method: POST
URL: http://localhost:5050/exp/experiments/admin-testexp-1702808175/specifications/create?token=eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJuYW1lIjogImFkbWluIiwgImV4cCI6IDE3MDM3MDUwNDh9.xW6cmsO7DVJZ7q2Y_gHROKw9Z7lAUgR2S_8voz8DyVQ
data: {
    "exp_name": "test experiment"
}
```

### Projects

| API                            | Method | Payload                                                  | Description                               | Status Code                        |
| :----------------------------- | :----: | :------------------------------------------------------- | :---------------------------------------- | :--------------------------------- |
| /exp/projects                  |  GET   | /                                                        | List existing projects belong to the user | 200: OK, <br> 404: Error           |
| /exp/projects/create           |  POST  | {"name": \<project name>}                                | Create a new project                      | 201: Created, <br> 409: Duplicated |
| /exp/projects/<proj_id>/update |  PUT   | {"name": \<project name>, "description": \<description>} | Update project name and description       | 200: OK, <br> 409: Duplicate name  |
| /exp/projects/<proj_id>/delete | DELETE | /                                                        | Delete project and related experiments    | 204: Deleted <br> 404: Not found   |

### Experiments

| API                                                                 | Method | Payload                                                                 | Description                          | Status Code                            |
| :------------------------------------------------------------------ | :----: | :---------------------------------------------------------------------- | :----------------------------------- | :------------------------------------- |
| /exp/projects/<proj_id>/experiments                                 |  GET   | /                                                                       | Get all experiments under an project | 200: OK                                |
| /exp/projects/experiments/<exp_id>                                  |  GET   | /                                                                       | Get one experiment via experiment ID | 200: OK                                |
| /exp/projects/<proj_id>/experiments/create                          |  POST  | {"exp_name": \<experiment name>, "graphical_model": \<graphical model>} | Create a new experiment              | 201: Created, <br> 409: Duplicate name |
| /exp/projects/<proj_id>/experiments/<exp_id>/delete                 | DELETE | /                                                                       | Delete an experiment                 | 204: Deleted, <br> 404: Not found      |
| /exp/projects/<proj_id>/experiments/<exp_id>/update/name            |  PUT   | {"exp_name": \<new experiment name>}                                    | Update experiment name               | 200: OK, <br> 409: Duplicate name      |
| /exp/projects/<proj_id>/experiments/<exp_id>/update/graphical_model |  PUT   | {"graphical_model": \<graphical model>}                                 | Update experiment graphical model    | 200: OK                                |

### Categories

| API                                   | Method | Payload                    | Description                                                      | Status Code                        |
| :------------------------------------ | :----: | :------------------------- | :--------------------------------------------------------------- | :--------------------------------- |
| /task/categories                      |  GET   | /                          | List officially provided categories and user defined categories  | 200: OK, <br> 404: Error           |
| /task/categories/create               |  POST  | {"name": \<category name>} | Create a new category                                            | 201: Created, <br> 409: Duplicated |
| /task/categories/<category_id>/update |  PUT   | {"name": \<category name>} | Update category name. Only user created category can be updated. | 200: OK, <br> 409: Duplicate name  |
| /task/categories/<category_id>/delete | DELETE | /                          | Delete a user created category                                   | 204: Deleted <br> 404: Not found   |

### Tasks

| API                                                        | Method | Payload                                                                                | Description                                                                   | Status Code                            |
| :--------------------------------------------------------- | :----: | :------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- | :------------------------------------- |
| /task/categories/<category_id>/tasks                       |  GET   | /                                                                                      | Get all tasks under a category (both user defined and non-user defined tasks) | 200: OK                                |
| /task/categories/tasks/<task_id>                           |  GET   | /                                                                                      | Get one task via task ID                                                      | 200: OK                                |
| /task/categories/<category_id>/tasks/create                |  POST  | {"name": \<task name>, "provider": \<provider>, "graphical_model": \<graphical model>} | Create a new task                                                             | 201: Created, <br> 409: Duplicate name |
| /task/categories/tasks/<task_id>/delete                    | DELETE | /                                                                                      | Delete a task                                                                 | 204: Deleted, <br> 404: Not found      |
| /task/categories/<category_id>/tasks/<task_id>/update/info |  PUT   | {"name": \<new task name>, "description" : \<task description>}                        | Update task name and description                                              | 200: OK, <br> 409: Duplicate name      |
| /task/categories/tasks/<task_id>/update/graphical_model    |  PUT   | {"graphical_model": \<graphical model>}                                                | Update task graphical model                                                   | 200: OK                                |

## Execution

| API                             | Method | Payload | Description                                                                                         | Status Code                                                         |
| :------------------------------ | :----: | :------ | :-------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------ |
| /exp/execution/convert/<exp_id> |  POST  | /       | Convert graphical model into EMF format model. The returned model contains both JSON and XMI format | 200: OK, <br> 404: Experiment not exist, <br> 500: Converting error |
