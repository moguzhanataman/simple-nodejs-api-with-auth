const { swapAlgorithm } = require('./algorithm')

describe('Algorithm test', () => {
  test('for judystone', () => {
    const input = 'judystone'
    const output = swapAlgorithm(input)
    console.log('io', input, output)
    testStringGreatness(output, input)
  })

  test('for oguzhanataman', () => {
    const input = 'oguzhanataman'
    const output = swapAlgorithm(input)
    console.log('io', input, output)
    testStringGreatness(output, input)
  })
})

function testStringGreatness(x, y) {
  return expect(x > y).toBe(true)
}
