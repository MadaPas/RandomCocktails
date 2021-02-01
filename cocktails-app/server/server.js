
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})