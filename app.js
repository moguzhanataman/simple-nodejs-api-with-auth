const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const expressJwt = require('express-jwt')

// const usersRouter = require('./routes/users')
const authRouter = require('./src/auth/routes')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', authRouter)

module.exports = app
