require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const {CLIENT_ORIGIN} = require('./config');
const { NODE_ENV } = require('./config')
const projectsRouter = require('./projects/projects-router')
const ingredientsRouter = require('./ingredients/ingredients-router')
const packagingRouter = require('./packaging/packaging-router')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())
app.options('*', cors())
// app.use(cors({
//     origin: CLIENT_ORIGIN
// }))

app.use('/projects', projectsRouter)
app.use('/ingredients', ingredientsRouter)
app.use('/packaging', packagingRouter)

app.get('/', (req, res, next) => {
    res.send('connected')
})



app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response={error: {message: 'server error'}}
    } else {
        console.error(error)
        response={message: error.message, error}
    }
    res.status(500).json(response)
})

module.exports = app



