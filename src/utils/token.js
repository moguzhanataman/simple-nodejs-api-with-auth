const accessTokenSecret = 'youraccesstokensecret'

function generateJwtToken(user) {
  return jwt.sign({ username: user.username }, accessTokenSecret)
}

module.exports = { generateJwtToken }
