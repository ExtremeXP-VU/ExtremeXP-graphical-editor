FROM python:3.9-alpine

COPY . /server-authentication
WORKDIR /server-authentication
# apline can not build pandas by default
# https://copyprogramming.com/howto/install-pandas-in-a-dockerfile

RUN pip install -r requirements.txt

COPY . .

WORKDIR /server-authentication/src
ENV PORT 5555
EXPOSE 5555

ENTRYPOINT [ "python" ]
CMD [ "run.py" ]