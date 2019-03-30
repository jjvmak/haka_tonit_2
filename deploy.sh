#!/bin/sh

heroku container:push web --app g-market
heroku container:release web
