#!/usr/bin/env bash
#########################################
## Runs Jumper as a service in docker. ##
## Connect via http://127.0.0.1:8080   ##
#########################################
set -eux
docker run -it -p 8080:8080 ghcr.io/egeexyz/jumper:latest
