const jwt = require('jsonwebtoken')
const { generateJwtToken } = require('../../utils/token')
const User = require('../../models/user')
async function login(username, password) {
  // Filter user from the users array by username and password
  const user = await User.findOne({ username, password }).lean()
  console.log(user)

  if (user) {
    return generateJwtToken(user)
  }

  return null
}

module.exports = login
