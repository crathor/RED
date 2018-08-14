const smallestNumber = require('../lib/smallestNumber')
describe('get smallest number not in an array', () => {
  describe('When array length is zero', () => {
    it('should return 0', () => {
      const result = smallestNumber([])
      expect(result).toEqual(0)
    })
  })
  describe('if array is not passed in', () => {
    it('should return 0', () => {
      const result = smallestNumber('hello')
      expect(result).toEqual(0)
    })
  })
  describe('if array is passed with elements that are  not integers', () => {
    it('should return 0', () => {
      const result = smallestNumber([1, 3, 5, 'hello'])
      expect(result).toEqual(0)
    })
  })
  describe('all array elements are negative', () => {
    it('should return 1', () => {
      const result = smallestNumber([-1, 0, -2, -3])
      expect(result).toEqual(1)
    })
  })
  describe('if array contains all the same number', () => {
    it('should return a number 1 lower than it unless it would equal zero', () => {
      const result = compress([1, 1, 1, 1, 1])
      expect(result).toEqual(2)
    })
  })
  describe('if array contains valid positive integers', () => {
    it('should return smallest positive number', () => {
      const result = compress([1, 2, 3, 4, 6, 1])
      expect(result).toEqual(2)
    })
  })
})
