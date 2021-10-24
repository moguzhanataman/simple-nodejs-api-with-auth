const mongoose = require('mongoose')
const Schema = mongoose.Schema

// TODO: hash password
const UserSchema = new Schema({
  email: String,
  username: String,
  password: String,
})

module.exports = mongoose.Model('UserModel', UserSchema)
