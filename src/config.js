module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost',
    DB_URL="postgresql://allison@localhost/batch"
}

// API_BASE_URL: process.env.REACT_APP_API_BASE_URL ||
//       "http://localhost:3000/api",