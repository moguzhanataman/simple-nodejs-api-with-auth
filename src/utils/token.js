// TODO: should be on process.env
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const accessTokenSecret = 'youraccesstokensecret'

function generateJwtToken(user) {
  return jwt.sign({ ...user }, accessTokenSecret)
}

function requireAuth(req, res, next) {
  console.log('requireAuth')
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null)
    return res.status(401).json({ error: 'User is not authorized' })

  jwt.verify(token, accessTokenSecret, async (err, tokenData) => {
    if (err) {
      console.log(err)
      return res.status(403).json({ error: 'Invalid token' })
    }

    const user = await User.findOne({ email: tokenData.email })
    if (user.lastTokenIssuedAt > tokenData.iat) {
      console.log('lastTokenIat', user.lastTokenIssuedAt)
      console.log('token iat', tokenData.iat)
      return res.status(403).json({ error: 'Token expired' })
    }

    req.tokenData = tokenData
    req.token = token
    next()
  })
}

// JWT stores iat as seconds, we need to convert out ms based timestamp to seconds too
function updateLastTokenIssuedAt() {
  return Math.floor(Date.now() / 1000)
}

module.exports = { generateJwtToken, requireAuth, updateLastTokenIssuedAt }
