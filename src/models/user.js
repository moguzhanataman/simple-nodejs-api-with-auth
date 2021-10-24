const mongoose = require('mongoose')
const Schema = mongoose.Schema

// TODO: hash password
const UserSchema = new Schema({
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String,
})

module.exports = mongoose.model('User', UserSchema)
