const { countTo } = require('./count-to-n')

describe('countTo', () => {
  it('works', () => {
    const result = countTo(1)
    expect(result).toEqual([1])
  })

  it('works', () => {
    const result = countTo(2)
    expect(result).toEqual([1, 2])
  })
  it('works', () => {
    const result = countTo(3)
    expect(result).toEqual([1, 2, 3])
  })
  it('works', () => {
    const result = countTo(4)
    expect(result).toEqual([1, 2, 3, 4])
  })
  it('works', () => {
    const result = countTo(10)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
