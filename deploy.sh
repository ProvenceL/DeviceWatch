#!/bin/sh
yarn install
yarn run build
scp index.html root@47.101.48.215:/var/www/devicewatchmobile/
scp -r dist root@47.101.48.215:/var/www/devicewatchmobile/
