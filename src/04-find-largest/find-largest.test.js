const { findLargest } = require('./find-largest')

describe('findLargest', () => {
  xit('works with 0 elements', () => {
    const result = findLargest([])
    expect(result).toEqual(null)
  })

  it('works with 1 elements', () => {
    const result = findLargest([3])
    expect(result).toEqual(3)
  })

  it('works with 2 elements', () => {
    const result = findLargest([3, 5])
    expect(result).toEqual(5)
  })

  it('works with 3 elements', () => {
    const result = findLargest([3, 5, 4])
    expect(result).toEqual(5)
  })

  it('works with 4 elements', () => {
    const result = findLargest([3, 5, 4, 9])
    expect(result).toEqual(9)
  })

  it('works', () => {
    const result = findLargest([10, 23, 5])
    expect(result).toEqual(23)
  })

  it('works', () => {
    const result = findLargest([-10, -4, -1])
    expect(result).toEqual(-1)

    if (1 > null) {
      // Entra!
    }

    if (-1 > null) {
      // No Entra!
    }
  })
})
