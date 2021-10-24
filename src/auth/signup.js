const { users } = require('./users.db')

function signup(email, username, password) {
  // TODO: Db call
  // TODO: send mail
  users.push({ email, username, password })
}

module.exports = signup
