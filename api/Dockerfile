FROM node:20.13.1-bullseye-slim

# Protobuf
RUN apt update -y && apt install protobuf-compiler -y
RUN protoc --version

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .
RUN yarn install
RUN yarn prisma generate
RUN bash ./scripts/proto.sh

CMD [ "yarn", "run", "start" ]
