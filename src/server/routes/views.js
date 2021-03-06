const express = require('express')

const router = express.Router()

function views() {
  router.get('/', (req, res) => {
    res.render('index.html')
  })
  router.get('/login', (req, res) => {
    res.render('login.html')
  })

  return router
}

module.exports = views
