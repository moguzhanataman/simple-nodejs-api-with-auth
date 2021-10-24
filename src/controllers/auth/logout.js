const User = require('../../models/User')
const { updateLastTokenIssuedAt } = require('../../utils/token')

async function logout(email) {
  const user = await User.findOneAndUpdate(
    { email },
    {
      lastTokenIssuedAt: updateLastTokenIssuedAt(),
    },
    { returnOriginal: true }
  )

  console.log('logout', user)
}

module.exports = { logout }
