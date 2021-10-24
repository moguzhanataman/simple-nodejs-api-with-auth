const { generateJwtToken } = require('../utils/token')
const { users } = require('./users.db')

function signup(email, username, password) {
  // TODO: Db call
  // TODO: send mail
  // TODO: return JWT
  const isUsernameTaken = users.find((user) => user.username === username)
  if (isUsernameTaken) {
    throw new Error('Username is taken')
  }

  const isEmailTaken = users.find((user) => user.email === email)
  if (isEmailTaken) {
    throw new Error('Email is taken')
  }

  const user = { email, username, password }
  users.push(user)

  return { token: generateJwtToken(user) }
}

module.exports = signup
