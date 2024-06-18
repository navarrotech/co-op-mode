FROM node:20.13.1-bullseye-slim

# # Dependencies - Python 3 (attempting to get zmq to work)
# RUN apt update -y && apt install -y \
#     python3 \
#     python3-pip \
#     build-essential \
#     curl \
#     cmake \
#     libc6

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .
RUN yarn install
RUN yarn prisma generate

CMD [ "yarn", "run", "start" ]
