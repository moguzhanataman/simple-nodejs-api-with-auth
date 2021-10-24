const {
  generateJwtToken,
  updateLastTokenIssuedAt,
} = require('../../utils/token')
const User = require('../../models/User')

async function signup(email, username, password) {
  // TODO: Db call
  // TODO: send mail
  // TODO: return JWT

  // const userModel = await User.findOne({ $or: [{ username }, { email }] })
  // const isUsernameTaken = users.find((user) => user.username === username)

  // if (isUsernameTaken) {
  //   throw new Error('Username is taken')
  // }

  // // const isEmailTaken = users.find((user) => user.email === email)
  // if (isEmailTaken) {
  //   throw new Error('Email is taken')
  // }

  try {
    const user = new User({
      email,
      username,
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
