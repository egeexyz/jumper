FROM node:lts-alpine
WORKDIR /app
COPY package*.json /app
COPY public/ /app
RUN npm ci --omit=dev
CMD [ "npm", "run", "serve" ]
