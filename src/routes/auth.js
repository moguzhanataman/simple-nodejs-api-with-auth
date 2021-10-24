var express = require('express')
const { login } = require('../auth/login')
var router = express.Router()

router.post('/login', (req, res) => {
  const { username, password } = req.body

  const token = login(username, password)
  if (token) {
    return res.json({
      token,
    })
  }

  res.status(401).send('Username or password incorrect')
})

module.exports = router
