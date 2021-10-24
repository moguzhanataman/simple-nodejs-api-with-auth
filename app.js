const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const expressJwt = require('express-jwt')

const authRouter = require('./src/routes/auth')
const profileRouter = require('./src/routes/my-profile')
const codeRouter = require('./src/routes/code')

const { requireAuth } = require('./src/utils/token')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', authRouter)
app.use('/my-profile', requireAuth, profileRouter)
app.use('/code', requireAuth, codeRouter)

module.exports = app
