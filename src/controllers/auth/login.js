const jwt = require('jsonwebtoken')
const {
  generateJwtToken,
  updateLastTokenIssuedAt,
} = require('../../utils/token')
const User = require('../../models/User')
async function login(username, password) {
  // Filter user from the users array by username and password
  const user = await User.findOne({ username, password })
  console.log(user)

  let token
  if (user) {
    token = generateJwtToken(user)
    await user.updateOne({ lastTokenIssuedAt: updateLastTokenIssuedAt() })
    return token
  }

  return null
}

module.exports = login
