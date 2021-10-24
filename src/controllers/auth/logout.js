const User = require('../../models/User')
const { updateLastTokenIssuedAt } = require('../../utils/token')

async function logout(username) {
  // await User.findOne({ username })
  const user = await User.findOneAndUpdate(
    { username },
    {
      lastTokenIssuedAt: updateLastTokenIssuedAt(),
    },
    { returnOriginal: true }
  )

  console.log('logout', user)
}

module.exports = { logout }
