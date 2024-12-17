
// server.js

const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('welcome to my express application hello world lets deploy... okay next trials')
})

app.listen(4000, '0.0.0.0', () => {
  console.log('server started on port 4000')
})
