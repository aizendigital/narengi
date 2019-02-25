FROM node:10-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY --chown=node:node . .
EXPOSE 8080
ENV API_URL=""
#Becareful! API_URL should set in webpack
CMD [ "npm", "start" ]
