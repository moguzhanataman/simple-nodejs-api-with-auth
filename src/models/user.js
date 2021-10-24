const mongoose = require('mongoose')
const Schema = mongoose.Schema

// TODO: hash password
const UserSchema = new Schema({
  email: { type: String, unique: true },
  firstname: { type: String },
  lastname: { type: String },
  password: { type: String, select: false },
  lastTokenIssuedAt: { type: Number }, // instead of blacklisting, I decided to store last token issued at field to simplify logout implementation
})

module.exports = mongoose.model('User', UserSchema)
