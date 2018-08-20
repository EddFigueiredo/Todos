FROM ruby:2.5.1-alpine

WORKDIR /home/application
COPY . .
RUN apk --no-cache add alpine-sdk postgresql-dev && \
    bundle install
CMD bin/rails server -p 8000 -c 0.0.0.0

