const { sumNumbers } = require('./sum-numbers')

describe('sumNumbers', () => {
  it('works with 1', () => {
    const result = sumNumbers(1)
    expect(result).toEqual(1)
  })
  it('works with 2', () => {
    const result = sumNumbers(2)
    expect(result).toEqual(3)
  })
  it('works with 3', () => {
    const result = sumNumbers(3)
    expect(result).toEqual(6)
  })
  it('works with 4', () => {
    const result = sumNumbers(4)
    expect(result).toEqual(10)
  })
  xit('works', () => {
    const result = sumNumbers(5)
    expect(result).toEqual(15)
  })
})
