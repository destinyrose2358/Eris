
FROM node:10.13.0-alpine as build

WORKDIR /usr/src/node_app

ARG NODE_ENV=production

ENV PATH /usr/src/node_app/node_modules/.bin:$PATH

COPY package.json /usr/src/node_app/package.json

RUN npm install --silent

COPY . /usr/src/node_app

RUN npm run postinstall

FROM ruby:2.5.1-alpine

RUN apk add --no-cache --update build-base \
  linux-headers \
  git \
  postgresql-dev \
  nodejs \
  tzdata

ARG DATABASE_URL="postgres://postgres@db"
ARG RAILS_ENV=production

WORKDIR /my_app
COPY Gemfile /my_app/Gemfile
COPY Gemfile.lock /my_app/Gemfile.lock

RUN gem install bundler && bundle install
COPY . /my_app

COPY --from=build /usr/src/node_app/app/assets/javascripts/bundle.js ./app/assets/javascripts/
COPY --from=build  /usr/src/node_app/app/assets/javascripts/bundle.js.map ./app/assets/javascripts/

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]