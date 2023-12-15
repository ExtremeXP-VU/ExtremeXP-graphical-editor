# Experiment Server

## Endpoints HTTP

All the endpoints HTTP repquest requires `headers` for user authentication:

```json
{
    "token": <jwt token>
}
```

| API                     | Method | Payload                          | Description                                  | Status Code                        |
| :---------------------- | :----: | :------------------------------- | :------------------------------------------- | :--------------------------------- |
| /exp/experiments        |  GET   | /                                | List existing experiments belong to the user | 200: OK, <br> 404: Error           |
| /exp/experiments/create |  POST  | {"exp_name": \<experiment name>} | create a new experiment                      | 201: Created, <br> 409: Duplicated |
