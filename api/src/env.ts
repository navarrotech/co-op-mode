// Copyright © 2024 Navarrotech

import 'dotenv/config'

const {
    DOMAIN = 'localhost',
    NODE_ENV = 'development',
    DATABASE_URL = 'postgres://postgres:postgres@co-op-mode-postgres:5432/postgres',
    REDIS_URL = 'redis://co-op-mode-redis:6379',
    RABBITMQ_URL = 'amqp://co-op-mode-rabbitmq',
    API_PORT = '80',
    SESSION_SECRET = 'lizard-kangaroo',
    VERSION = 'developer',
    PLIVO_AUTH_ID,
    PLIVO_TOKEN,
    PLIVO_APP_UUID,
    PLIVO_APP_NUMBER,
} = process.env

if (!PLIVO_AUTH_ID || !PLIVO_TOKEN || !PLIVO_APP_UUID || !PLIVO_APP_NUMBER) {
    console.error('PLIVO_AUTH_ID, PLIVO_APP_UUID and PLIVO_TOKEN must be set')
}

export {
    NODE_ENV,

    DOMAIN,
    API_PORT,
    VERSION,

    SESSION_SECRET,

    DATABASE_URL,
    REDIS_URL,
    RABBITMQ_URL,

    PLIVO_AUTH_ID,
    PLIVO_TOKEN,
    PLIVO_APP_UUID,
    PLIVO_APP_NUMBER,
}
