require('dotenv').config()

module.exports = {
  "migrationsDirectory": "migrations",
  "driver": "pg",
  "native": "true",
  "connectionString": (process.env.NODE_ENV === 'test')
    ? process.env.REACT_APP_TEST_DATABASE_URL
    : process.env.REACT_APP_DATABASE_URL
}