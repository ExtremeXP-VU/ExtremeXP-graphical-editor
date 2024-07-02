FROM node:20-alpine

WORKDIR /web-app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 7001

CMD ["npm", "run", "dev"]
