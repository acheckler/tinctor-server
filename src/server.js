const app = require('./app')
const knex = require('knex')


const { PORT, REACT_APP_DATABASE_URL } = require('./config')

const db = knex({
      client: 'pg',
      connection: REACT_APP_DATABASE_URL,
    })

app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})

