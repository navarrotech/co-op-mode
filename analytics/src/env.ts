// Copyright © 2024 Navarrotech

const {
    RABBITMQ_URL = 'amqp://co-op-mode-rabbitmq',
    REDIS_URL = 'redis://co-op-mode-redis',
} = process.env

export {
    RABBITMQ_URL,
    REDIS_URL,
}
