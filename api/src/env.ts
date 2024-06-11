
const {
    DOMAIN = 'localhost',
    NODE_ENV = 'development',
    SESSION_ENCRYPTION_KEY = '12345',
    DATABASE_URL = 'postgres://postgres:postgres@co-op-mode-postgres:5432/postgres',
    REDIS_URL = 'redis://co-op-mode-redis:6379',
    API_PORT = '80',
} = process.env;

export {
    DOMAIN,
    NODE_ENV,
    SESSION_ENCRYPTION_KEY,
    DATABASE_URL,
    REDIS_URL,
    API_PORT,
}
