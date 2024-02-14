FROM node:14-alpine

WORKDIR /usr/share/app

COPY ./build .

COPY package.json .

COPY ./certs /usr/local/share/ca-certificates

RUN apk add --no-cache ca-certificates

RUN update-ca-certificates

RUN npm install

ENV ENV=server

ENV SERVER_PORT=443

CMD ["node", "index.js"]
