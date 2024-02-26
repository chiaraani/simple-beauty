FROM ruby:3.3 as base

RUN apt-get update -qq && apt-get install -y build-essential apt-utils libpq-dev # nodejs

COPY . /docker/app/

WORKDIR /docker/app/docs

RUN gem install bundler

CMD bundle && jekyll serve