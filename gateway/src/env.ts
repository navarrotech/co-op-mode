// Copyright © 2024 Navarrotech

const {
    NODE_ENV = "development",
    RABBITMQ_URL = "amqp://co-op-mode-rabbitmq",
    DATABASE_URL,
    SESSION_SECRET = 'lizard-kangaroo',
    REDIS_URL,
    PORT = "80",
} = process.env

const PARSED_PORT = parseInt(PORT)

export {
    NODE_ENV,
    DATABASE_URL,
    REDIS_URL,
    SESSION_SECRET,
    PARSED_PORT as PORT,
    RABBITMQ_URL,
}
