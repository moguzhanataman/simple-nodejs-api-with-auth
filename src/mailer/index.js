const EventEmitter = require('events').EventEmitter
const Mailer = new EventEmitter()

Mailer.on('signup', (message) => {
  // Send email
  console.log('email sent to', message.email)
})

module.exports = Mailer
