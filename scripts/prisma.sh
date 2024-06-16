#!/bin/bash

execute_command_in_container() {
    local CONTAINER_NAME=$1
    local COMMAND=$2

    # Check if the container exists
    if [ "$(docker ps -a --filter name=$CONTAINER_NAME -q)" ]; then
        # Start the container if it is not running
        if [ -z "$(docker ps --filter name=$CONTAINER_NAME -q)" ]; then
            docker start $CONTAINER_NAME
        fi
        # Execute the command inside the container
        docker exec $CONTAINER_NAME bash -c "$COMMAND"
    else
        echo "Container $CONTAINER_NAME does not exist."
    fi
}

mkdir -p api/prisma
mkdir -p routines/prisma

cp schema.prisma api/prisma/schema.prisma
cp schema.prisma routines/prisma/schema.prisma

execute_command_in_container "co-op-mode-api" "cd /app && yarn prisma generate"
execute_command_in_container "co-op-mode-routines" "cd /app && yarn prisma generate"
