#!/bin/bash

# Define the commands to run
cmd1="nodemon --watch schema.proto -e proto --exec './gen.sh'"
cmd2="nodemon --watch api/src/docs,src/**.ts -e ts,squirrelly --exec './doc.sh'"

# Function to handle termination
terminate() {
  echo "Terminating both processes..."
  kill $PID1 $PID2
}

# Trap the SIGINT signal (Ctrl+C) and call the terminate function
trap terminate SIGINT

# Start the first command in the background
$cmd1 &
PID1=$!

# Start the second command in the background
$cmd2 &
PID2=$!

# Wait for both background processes
wait $PID1
wait $PID2
