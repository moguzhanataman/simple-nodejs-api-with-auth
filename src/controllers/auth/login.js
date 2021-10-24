const jwt = require('jsonwebtoken')
const {
  generateJwtToken,
  updateLastTokenIssuedAt,
} = require('../../utils/token')
const User = require('../../models/User')
async function login(email, password) {
  const user = await User.findOne({ email, password })
  console.log(user)

  let token
  if (user) {
    token = generateJwtToken(user.toJSON())
    await user.updateOne({ lastTokenIssuedAt: updateLastTokenIssuedAt() })
    return token
  }

  return null
}

module.exports = login
