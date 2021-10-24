const express = require('express')
const router = express.Router()

router.get('/my-profile', (req, res) => {
  const tokenData = req.tokenData
  res.json({ username: tokenData.username })
})

// router.get('/', (req, res) => res.json({}))

module.exports = router
