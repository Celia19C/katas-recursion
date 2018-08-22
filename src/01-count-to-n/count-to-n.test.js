const { countTo } = require('./count-to-n')

describe('countTo', () => {
  it('works with 0', () => {
    const result = countTo(0)
    expect(result).toEqual([])
  })
  it('works with 1', () => {
    const result = countTo(1)
    expect(result).toEqual([1])
  })
  it('works with 2', () => {
    const result = countTo(2)
    expect(result).toEqual([1, 2])
  })
  it('works with 3', () => {
    const result = countTo(3)
    expect(result).toEqual([1, 2, 3])
  })
  it('works with 4', () => {
    const result = countTo(4)
    expect(result).toEqual([1, 2, 3, 4])
  })
  xit('works', () => {
    const result = countTo(10)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
