# STAGE 1
FROM node:16-alpine as builder
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./

RUN chown -R node:node /home/node/app
USER node
RUN npm install
COPY --chown=node:node . .
RUN npm run build
EXPOSE 3000
CMD [ "node", "build/index.js" ]