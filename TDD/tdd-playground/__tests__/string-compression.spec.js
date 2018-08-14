const compressString = require('../lib/string-compression.js')
describe('compressString', () => {
  describe('when argument is not of type string', () => {
    it('should return error', () => {
      const result = compressString(12345)
      expect(result).toEqual('error')
    })
  })
  describe('when argument is not empty', () => {
    it('should return error', () => {
      const result = compressString()
      expect(result).toEqual('error')
    })
  })
  describe('when argument length is 1', () => {
    it('should return character + 1', () => {
      const result = compressString('a')
      expect(result).toEqual('a1')
    })
  })
  describe('when argument length is 1 and not between a-z', () => {
    it('should return error', () => {
      const result = compressString('!')
      expect(result).toEqual('error')
    })
  })
  describe('when argument is correct type', () => {
    it('should return a compressed string of its letters and the count of each', () => {
      const result = compressString('abbccc')
      expect(result).toEqual('a1b2c3')
    })
  })
  describe('when argument is correct type but contains punctuation, numbers or spaces', () => {
    it('should return compressed string with removed characters', () => {
      const result = compressString('aab2cc!@_ d')
      expect(result).toEqual('a2b1c2d1')
    })
  })
  describe('when argument is correct type but contains spaces', () => {
    it('should return compressed string', () => {
      const result = compressString('the fox jumped')
      expect(result).toEqual('t1h1e2f1o1x1j1u1m1p1d1')
    })
  })
})
