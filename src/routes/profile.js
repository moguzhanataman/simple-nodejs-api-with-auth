const express = require('express')
const router = express.Router()

router.get('/my-profile', (req, res) => {
  res.json({ user: 'user' })
})

// router.get('/', (req, res) => res.json({}))

module.exports = router
