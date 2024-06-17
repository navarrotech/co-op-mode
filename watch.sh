#!/bin/bash

# Define the commands to run
cmd1="nodemon --watch schema.proto -e proto --exec './scripts/protos.sh'"
cmd2="nodemon --watch api/src/docs,src/**.ts -e ts,squirrelly --exec './scripts/doc.sh'"
cmd3="nodemon --watch schema.prisma -e prisma --exec './scripts/prisma.sh'"

# Function to handle termination
terminate() {
  echo "Terminating both processes..."
  kill $PID1 $PID2 $PID3
}

# Trap the SIGINT signal (Ctrl+C) and call the terminate function
trap terminate SIGINT

# Start the first command in the background
$cmd1 &
PID1=$!

# Start the second command in the background
$cmd2 &
PID2=$!

# Start the third command in the background
$cmd3 &
PID3=$!

# Wait for both background processes
wait $PID1
wait $PID2
wait $PID3
