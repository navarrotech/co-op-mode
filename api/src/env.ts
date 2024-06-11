
const {
    DOMAIN = 'localhost',
    NODE_ENV = 'development',
    SESSION_ENCRYPTION_KEY = '12345',
    DATABASE_URL = 'postgres://postgres:postgres@libertea-postgres:5432/postgres',
    API_PORT = '80',
} = process.env;

export {
    DOMAIN,
    NODE_ENV,
    SESSION_ENCRYPTION_KEY,
    DATABASE_URL,
    API_PORT,
}
