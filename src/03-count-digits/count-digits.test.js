const { countDigits } = require('./count-digits')

describe('countDigits', () => {
  it('works', () => {
    const result = countDigits(12345)
    expect(result).toEqual(5)
  })
  it('works', () => {
    const result = countDigits(-1)
    expect(result).toEqual(1)
  })
  it('works', () => {
    const result = countDigits(123)
    expect(result).toEqual(3)
  })
  it('works', () => {
    const result = countDigits(120000000000000000000000000000000000000000000000000000000003)
    expect(result).toEqual(60)
  })
})
