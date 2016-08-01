#!/bin/bash

pm2 delete all

PORT=8001 pm2 start api.js --name "API-8001" -f
PORT=8002 pm2 start api.js --name "API-8002" -f
PORT=8003 pm2 start api.js --name "API-8003" -f
PORT=8004 pm2 start api.js --name "API-8004" -f
PORT=8005 pm2 start api.js -i 3 --name "API-C-8005" -f
