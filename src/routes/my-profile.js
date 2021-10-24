const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const tokenData = req.tokenData
  res.json({ ...tokenData })
})

module.exports = router
