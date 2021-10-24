const login = require('./login')
const signup = require('./signup')

describe('Login', () => {
  test('valid', () => {
    const result = login('oguzhan', 'pw123')
    expect(result).toBeTruthy()
  })

  test('invalid', () => {
    const result = login('not valid user', 'not valid password')
    expect(result).toBeNull()
  })
})

describe('Signup', () => {
  test('valid', () => {
    const result = signup('moguzhanataman@gmail.com', 'oguzhan', 'pw123')
    expect(result).toBeTruthy()
  })
})
