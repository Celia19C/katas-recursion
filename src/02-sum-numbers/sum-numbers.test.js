const { sumNumbers } = require('./sum-numbers')

describe('sumNumbers', () => {
  xit('works', () => {
    const result = sumNumbers(5)
    expect(result).toEqual(15)
  })
})
