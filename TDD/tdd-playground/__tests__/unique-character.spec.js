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
      expect(result).toEqual('e')
    })
  })
  describe('when string is all the same character', () => {
    it('should return undefined', () => {
      const result = getUniqueChar('ttttttt')
      expect(result).toBeUndefined()
    })
  })
  describe('when string contains no unique characters', () => {
    it('should return undefined', () => {
      const result = getUniqueChar('tttttttzzzzzzzz')
      expect(result).toBeUndefined()
    })
  })
  describe('when string contains a unique character', () => {
    it('should return the first unique character', () => {
      const result = getUniqueChar('frof')
      expect(result).toEqual('r')
    })
  })
  describe('when string contains more than one unique character', () => {
    it('should return the first unique character', () => {
      const result = getUniqueChar('ttzggyza')
      expect(result).toEqual('y')
    })
  })
})
