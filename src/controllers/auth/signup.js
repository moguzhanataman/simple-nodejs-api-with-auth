const {
  generateJwtToken,
  updateLastTokenIssuedAt,
} = require('../../utils/token')
const User = require('../../models/User')

async function signup(email, firstname, lastname, password) {
  try {
    const user = new User({
      email,
      firstname,
      lastname,
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
