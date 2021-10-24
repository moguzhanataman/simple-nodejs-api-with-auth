const express = require('express')
const router = express.Router()
const login = require('../controllers/auth/login')
const signup = require('../controllers/auth/signup')

router.post('/login', (req, res) => {
  const { username, password } = req.body

  const token = login(username, password)
  if (token) {
    return res.json({
      token,
    })
  }

  res.status(401).json({ error: 'Username or password incorrect' })
})

router.post('/signup', async (req, res) => {
  const { email, username, password } = req.body
  let result
  try {
    result = await signup(email, username, password)
    console.log('result', result)
    // TODO send response with token
    res.json(result)
  } catch (error) {
    console.error(error)
    res.status(409).json({ error })
  }
})

// TODO: implement black list for tokens, since JWT tokens are stateless there is no way to invalidate a token
router.get('/logout', (req, res) => {})

module.exports = router
