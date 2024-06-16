
const {
    DOMAIN = 'localhost',
    NODE_ENV = 'development',
    SESSION_ENCRYPTION_KEY = '12345',
    DATABASE_URL = 'postgres://postgres:postgres@co-op-mode-postgres:5432/postgres',
    REDIS_URL = 'redis://co-op-mode-redis:6379',
    API_PORT = '80',
    SESSION_SECRET = 'lizard-kangaroo',
    VERSION = 'developer',
} = process.env;

export {
    NODE_ENV,

    DOMAIN,
    API_PORT,
    VERSION,

    SESSION_SECRET,
    SESSION_ENCRYPTION_KEY,
    DATABASE_URL,
    REDIS_URL,
    
}
