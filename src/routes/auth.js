const express = require('express')
const router = express.Router()
const login = require('../controllers/auth/login')
const { logout } = require('../controllers/auth/logout')
const signup = require('../controllers/auth/signup')
const { requireAuth } = require('../utils/token')

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const token = await login(email, password)
  if (token) {
    return res.json({
      token,
    })
  }

  res.status(401).json({ error: 'Email or password incorrect' })
})

router.post('/signup', async (req, res) => {
  const { email, password, firstname, lastname } = req.body
  let result
  try {
    result = await signup(email, firstname, lastname, password)
    console.log('result', result)

    req.app.get('mailer').emit('signup', { email })

    res.json(result)
  } catch (error) {
    console.error(error)
    res.status(409).json({ error })
  }
})

router.post('/logout', requireAuth, async (req, res) => {
  const { email } = req.tokenData
  await logout(email)
  res.json({ success: true })
})

module.exports = router
