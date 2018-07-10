FROM node:10.6.0-alpine

WORKDIR /src/webapp

COPY . ./

RUN yarn
RUN yarn build

#EXPOSE 3000

CMD yarn build