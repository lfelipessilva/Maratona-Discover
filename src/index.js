const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.static('public'))

app.listen(3000, () => {
  console.log('rodando')
})