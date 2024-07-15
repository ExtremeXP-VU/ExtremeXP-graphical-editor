# ExtremeXP-graphical-editor (Working in Progress)

## Build

In the root folder (i.e. the folder contains `docker-compose.yaml` file):

```shell
# make sure docker is installed
docker-compose up -d
```

Or, if you need everything re-built before running:

```shell
docker-compose up --build
```

To access the app: http://localhost:7001/

### Deploy on SSH

To deploy the framework on a server with public IP, you need to change the `VITE_API_URL` for the frontend HTTP request in `web-app/.env`.
For example,

```javascript
// for local development
VITE_API_URL = 'http://127.0.0.1/';

// for SSH deployment
VITE_API_URL = 'http://145.1xx.2xx.2x/';
```

## Demo

**Network Deployment:**

![newtwork_structure](https://github.com/ExtremeXP-VU/ExtremeXP-graphical-editor/blob/main/demo_images/network_and_authentication.v2.png)

**Login**

![login](https://github.com/Yunabell-VU/ExtremeXP-graphical-editor/blob/main/demo_images/1.login.png)

**Dashboard:**

![dashboard experiments](https://github.com/Yunabell-VU/ExtremeXP-graphical-editor/blob/main/demo_images/2.dashboard-experiments-overview.png)
![dashboard experiments deletion](https://github.com/Yunabell-VU/ExtremeXP-graphical-editor/blob/main/demo_images/3.dashboard-experiments-deletion.png)
![dashboard tasks](https://github.com/Yunabell-VU/ExtremeXP-graphical-editor/blob/main/demo_images/4.dashboard-tasks-overview.png)

**Editor:**

![editor](https://github.com/Yunabell-VU/ExtremeXP-graphical-editor/blob/main/demo_images/6.editor-drag-to-add-composite-task.png)
![editor composite task editing](https://github.com/Yunabell-VU/ExtremeXP-graphical-editor/blob/main/demo_images/7.editor-composite-task-editing.png)
![editor label editing](https://github.com/Yunabell-VU/ExtremeXP-graphical-editor/blob/main/demo_images/8.editor-label-editing.png)
![editor task config panel](https://github.com/Yunabell-VU/ExtremeXP-graphical-editor/blob/main/demo_images/9.editor-task-config-panel-name-editing.png)
![editor task variant selection](https://github.com/Yunabell-VU/ExtremeXP-graphical-editor/blob/main/demo_images/10.editor-task-config-panel-variant-selection.png)
![editor add task variant](https://github.com/Yunabell-VU/ExtremeXP-graphical-editor/blob/main/demo_images/11.editor-task-config-panel-add-variant.png)
![editor model save](https://github.com/Yunabell-VU/ExtremeXP-graphical-editor/blob/main/demo_images/12.editor-model-save.png)
![editor model save as](https://github.com/Yunabell-VU/ExtremeXP-graphical-editor/blob/main/demo_images/13.editor-model-save-as.png)
