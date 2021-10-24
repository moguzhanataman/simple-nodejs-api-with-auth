const jwt = require('jsonwebtoken')
const { generateJwtToken } = require('../utils/token')
const { users } = require('./users.db')

function login(username, password) {
  // Filter user from the users array by username and password
  const user = users.find((u) => {
    return u.username === username && u.password === password
  })

  if (user) {
    return generateJwtToken(user)
  }

  return null
}

module.exports = login
