FROM node:20.9.0-alpine

WORKDIR /usr/backend/express

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8085

CMD [ "npm", "start" ]