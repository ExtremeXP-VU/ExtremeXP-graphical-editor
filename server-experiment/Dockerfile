# alpine has issue with pandas
FROM python:3.9-slim

COPY . /server-experiment
WORKDIR /server-experiment


RUN pip install -r requirements.txt

COPY . .

WORKDIR /server-experiment/src
ENV PORT 5050
EXPOSE 5050

ENTRYPOINT [ "python" ]
CMD [ "run.py" ]