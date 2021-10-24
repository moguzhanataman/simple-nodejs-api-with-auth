const {
  generateJwtToken,
  updateLastTokenIssuedAt,
} = require('../../utils/token')
const User = require('../../models/User')

async function signup(email, username, password) {
  try {
    const user = new User({
      email,
      username,
      password,
      lastTokenIssuedAt: updateLastTokenIssuedAt(),
    })
    await user.save()

    return { token: generateJwtToken(user.toObject()) }
  } catch (err) {
    console.error(err.message)
    const errorCause = Object.keys(err.keyPattern)
    return { error: `${errorCause} already exists` }
  }
}

module.exports = signup
