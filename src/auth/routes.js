var express = require('express')
var router = express.Router()

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

router.post('/signup', (req, res) => {})

router.post('/login', (req, res) => {
  // Read username and password from request body
  const { username, password } = req.body

  // Filter user from the users array by username and password
  const user = users.find((u) => {
    return u.username === username && u.password === password
  })

  if (user) {
    // Generate an access token
    const accessToken = jwt.sign(
      { username: user.username, role: user.role },
      accessTokenSecret
    )

    res.json({
      accessToken,
    })
  } else {
    res.send('Username or password incorrect')
  }
})

module.exports = router
