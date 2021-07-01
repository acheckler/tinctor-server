require('dotenv').config()

module.exports = {
  "migrationsDirectory": "migrations",
  "driver": "pg",
  "native": "true",
  "connectionString": (process.env.NODE_ENV === 'test')
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL
}

// host: process.env.PSQL_HOST || "localhost"