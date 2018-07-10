FROM node:10.6.0-alpine

WORKDIR /src/webapp

COPY . ./

RUN yarn
RUN yarn build

CMD yarn build