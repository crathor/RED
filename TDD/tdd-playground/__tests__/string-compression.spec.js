const compressString = require('../lib/string-compression.js')
describe('compressString', () => {
  describe('when argument is not of type string', () => {
    it('should return error', () => {
      const result = compressString(12345)
      expect(result).toEqual('error')
    })
  })
  describe('when argument is correct type', () => {
    it('should return a compressed string of its letters and the count of each', () => {
      const result = compressString('abbccc')
      expect(result).toEqual('a1b2c3')
    })
  })
  describe('when argument is correct type but contains numbers', () => {
    it('should return error', () => {
      const result = compressString('aab2ccd')
      expect(result).toEqual('error')
    })
  })
  describe('when argument is correct type but contains spaces', () => {
    it('should return compressed string', () => {
      const result = compressString('the fox jumped')
      expect(result).toEqual('t1h1e2f1o1j1u1m1p1')
    })
  })
})
