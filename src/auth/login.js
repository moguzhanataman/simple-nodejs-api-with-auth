const jwt = require('jsonwebtoken')
// mock before MongoDB integration
const users = [
  {
    username: 'oguzhan',
    password: 'pw123',
  },
  {
    username: 'other',
    password: 'pass',
  },
]

const accessTokenSecret = 'youraccesstokensecret'

function login(username, password) {
  // Filter user from the users array by username and password
  const user = users.find((u) => {
    return u.username === username && u.password === password
  })

  if (user) {
    // Generate an access token
    const token = jwt.sign(
      { username: user.username, role: user.role },
      accessTokenSecret
    )

    return token
  }

  return null
}

module.exports = login
