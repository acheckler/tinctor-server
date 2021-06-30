
module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    // CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000/',
    REACT_APP_DATABASE_URL: process.env.REACT_APP_DATABASE_URL || 'postgresql://allison@localhost/batch',
    REACT_APP_TEST_DATABASE_URL: process.env.REACT_APP_TEST_DATABASE_URL || "postgresql://allison@localhost/batch-test"

}
