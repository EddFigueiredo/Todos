#!/bin/bash
set -e

cd /home/application
rm -rvf tmp/pids/*
bundle install
bundle exec rake db:migrate 
bin/rails server -p 8000 --binding 0.0.0.0