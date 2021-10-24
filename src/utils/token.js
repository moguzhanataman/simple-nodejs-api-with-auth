// TODO: should be on process.env
const jwt = require('jsonwebtoken')

const accessTokenSecret = 'youraccesstokensecret'

function generateJwtToken(user) {
  return jwt.sign({ username: user.username }, accessTokenSecret)
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null)
    return res.status(401).json({ error: 'User is not authorized' })

  jwt.verify(token, accessTokenSecret, (err, tokenData) => {
    console.log(err)

    if (err) return res.status(403).json({ error: 'Invalid token' })

    console.log('user is', tokenData)
    req.tokenData = tokenData

    next()
  })
}

module.exports = { generateJwtToken, authenticateToken }
