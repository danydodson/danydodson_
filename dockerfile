FROM node:alpine as build

RUN apk update && \
  apk add --no-cache \
  make \
  git \
  python3 \
  autoconf \
  g++ \
  libc6-compat \
  libjpeg-turbo-dev \
  libpng-dev \
  nasm \
  libtool \
  automake

RUN mkdir -p /usr/src/app/node_modules

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn global add gatsby-cli
RUN yarn --pure-lockfile --silent

COPY . .

EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]
