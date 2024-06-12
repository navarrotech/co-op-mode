#!/bin/bash

# Run me in WSL!
# Outdated, we don't use google protobuf anymore!

sudo apt update -y && sudo apt install protobuf-compiler -y

# Function to install NVM
install_nvm() {
  echo "Installing NVM..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
  export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
  echo "Node.js not found. Installing NVM and Node.js..."
  install_nvm
  nvm install 20.11.1
  npm --global install yarn@^1.22.22
  echo "Node.js and Yarn installed, restart your terminal session for path to take effect!"
else
  echo "Node.js is already installed."
fi
