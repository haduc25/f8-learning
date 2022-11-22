const express = require('express')
var morgan = require('morgan')

const app = express()
const port = 3000

app.use(morgan('combined')) //type combined / Predefined Formats

app.get('/', (req, res) => {
  res.send('Hello World! <3 | ^^ | haduc25')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})