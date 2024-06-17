#!/bin/bash

# Define the commands to run
cmd1="nodemon --watch schema.proto -e proto --exec './scripts/protos.sh'"
cmd2="nodemon --watch api/src/docs,src/**.ts -e ts,squirrelly --exec './scripts/doc.sh'"
cmd3="nodemon --watch schema.prisma -e prisma --exec './scripts/prisma.sh'"
cmd4="nodemon --watch api/src/ -e .ts --exec './scripts/frontend-routes.sh'"

sudo chmod +x scripts/protos.sh
sudo chmod +x scripts/doc.sh
sudo chmod +x scripts/prisma.sh
sudo chmod +x scripts/frontend-routes.sh

# Function to handle termination
terminate() {
  echo "Terminating both processes..."
  kill $PID1 $PID2 $PID3 $PID4
}

# Trap the SIGINT signal (Ctrl+C) and call the terminate function
trap terminate SIGINT

# Start each command in the background
$cmd1 &
PID1=$!

$cmd2 &
PID2=$!

$cmd3 &
PID3=$!

$cmd4 &
PID4=$!

# Wait for both background processes
wait $PID1
wait $PID2
wait $PID3
wait $PID4
