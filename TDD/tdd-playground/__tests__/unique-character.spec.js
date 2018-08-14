// __tests__/frog-jumps.spec.js
const getUniqueChar = require('../lib/unique.js')
describe('getUniqueChar', () => {
  describe('when argument type is incorrect', () => {
    it('should return 0', () => {
      const result = getUniqueChar(123)
      expect(result).toEqual(0)
    })
  })
  describe('when argument contains numbers', () => {
    it('should return 0', () => {
      const result = getUniqueChar('abd2df')
      expect(result).toEqual(0)
    })
  })
  describe('when argument contains non-letter characters', () => {
    it('should return the first unique letter', () => {
      const result = getUniqueChar('!$##eg')
      expect(result).toEqual(0)
    })
  })
  describe('when string is all the same character', () => {
    it('should return undefined', () => {
      const result = getUniqueChar('ttttttt')
      expect(result).toEqual(undefined)
    })
  })
  describe('when string is passed correctly', () => {
    it('should return the first unique character', () => {
      const result = getUniqueChar('ttttfttt')
      expect(result).toEqual('f')
    })
  })
})
