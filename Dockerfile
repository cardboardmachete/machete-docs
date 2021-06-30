# develop stage
FROM node:current-alpine as develop-stage
RUN apk upgrade --update
RUN apk add git openssh
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
