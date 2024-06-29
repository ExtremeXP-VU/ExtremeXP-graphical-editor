FROM node:20-alpine

RUN npm install -g http-server

WORKDIR /web-app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]

# CMD ["npm", "run", "dev"]
RUN npm run build

EXPOSE 7001
CMD [ "http-server", "dist", "-p", "7001"]