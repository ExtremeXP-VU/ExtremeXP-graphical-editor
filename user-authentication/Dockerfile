FROM python:3.9-alpine

COPY . /user-authentication
WORKDIR /user-authentication
# apline can not build pandas by default
# https://copyprogramming.com/howto/install-pandas-in-a-dockerfile

RUN pip install -r requirements.txt

COPY . .

WORKDIR /user-authentication/src
ENV PORT 6666
EXPOSE 6666

ENTRYPOINT [ "python" ]
CMD [ "run.py" ]