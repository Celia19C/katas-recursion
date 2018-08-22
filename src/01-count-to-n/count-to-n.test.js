const { countTo } = require('./count-to-n')

describe('countTo', () => {
  xit('works', () => {
    const result = countTo(10)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
