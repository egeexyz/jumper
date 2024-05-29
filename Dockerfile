FROM node:lts-alpine
WORKDIR /app
COPY package*.json /app
COPY public/ /app/public
RUN npm install
CMD [ "npm", "run", "serve" ]
