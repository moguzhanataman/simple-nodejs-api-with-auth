var express = require('express')
const login = require('../auth/login')
const signup = require('../auth/signup')
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

router.post('/signup', (req, res) => {
  const { email, username, password } = req.body
  const result = signup(email, username, password)

  // TODO send response with token
  res.json({ token: '123', result })
})

module.exports = router
