var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/', function (req, res, next) {
  try {
    res.redirect('en')
  } catch (e) {
    next(e)
  }
})

app.get('/fr', function (req, res, next) {
  try {
    res.sendFile(__dirname + '/public/fr/index.html')
  } catch (e) {
    next(e)
  }
})

app.get('/en', function (req, res, next) {
  try {
    res.sendFile(__dirname + '/public/en/index.html')
  } catch (e) {
    next(e)
  }
})

app.listen(80, function () {
  console.log('Listening on http://localhost:' + 80)
})
