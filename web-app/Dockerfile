FROM node:20-alpine

WORKDIR /web-app

COPY package.json package-lock.json ./
RUN npm install
RUN npm i -g serve

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]

RUN npm run build
EXPOSE 7001

# CMD ["npm", "run", "dev"]
CMD ["serve", "-s", "dist", "-l", "7001"]
