FROM node:20.13.1-bullseye-slim

# Create app directory
WORKDIR /app

# Bundle app source
COPY ./routines .
COPY ./api/prisma/ ./prisma
RUN yarn install
RUN yarn prisma generate

CMD [ "yarn", "run", "start" ]
