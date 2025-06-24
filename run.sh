#!/usr/bin/env bash
#########################################
## Runs Jumper as a service in docker. ##
## Connect via http://127.0.0.1:8080   ##
#########################################
operation=$1
repo=${2:-ghcr.io/egeexyz/jumper}
version=${3:-latest}

if [[ $operation = -b ]]; then
    docker build -t "ghcr.io/egeexyz/jumper:$version" .
elif [[ $operation = -p ]]; then
    docker push "ghcr.io/egeexyz/jumper:$version"
elif [[ $operation = -r ]]; then
    docker run -it -p 8080:8080 "$repo"
else
    echo "available options:
    -b: build a new container image
    -p: push container image to image repository
    -r: run jumper as a service"
fi
