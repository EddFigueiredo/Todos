FROM ruby:2.5.1

WORKDIR /home/application
COPY . .
RUN bundle install
CMD bin/rails server -p 8000 --binding 0.0.0.0
ENTRYPOINT [ "/home/application/start.sh" ]

