// __tests__/frog-jumps.spec.js
const palindromeChecker = require('../lib/palindrome.js')
describe('palindromeChecker', () => {
  describe('when first letter does not equal the last letter', () => {
    it('should return false', () => {
      const result = palindromeChecker('hello')
      expect(result).toEqual(false)
    })
  })
  describe('when argument is not a string', () => {
    it('should return "error"', () => {
      const result = palindromeChecker(1234)
      expect(result).toEqual('error')
    })
  })
  describe('if length of the string equals 1', () => {
    it('should return false', () => {
      const result = palindromeChecker('i')
      expect(result).toEqual(false)
    })
  })
  describe('if string is a palindrome', () => {
    it('should return true', () => {
      const result = palindromeChecker('racecar')
      expect(result).toEqual(true)
    })
  })
  describe('if string contains spaces or punctuations/numbers and is a palindrome', () => {
    it('should return true', () => {
      const result = palindromeChecker('never-odd or-even123')
      expect(result).toEqual(true)
    })
  })
  describe('if string contains spaces or punctuations/numbers and is not a palindrome', () => {
    it('should return false', () => {
      const result = palindromeChecker('never-even-or-odd')
      expect(result).toEqual(false)
    })
  })
})
