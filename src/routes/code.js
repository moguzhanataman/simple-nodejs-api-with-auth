const express = require('express')
const { codeHandler } = require('../controllers/code/algorithm')
const router = express.Router()

// TODO: Implement code algorithm
router.get('/', (req, res) => {
  const { firstname, lastname } = req.tokenData

  const codeResult = codeHandler(firstname, lastname)
  res.json(codeResult)
})

module.exports = router
