// __tests__/frog-jumps.spec.js
const frogJumps = require('../lib/frog-jumps.js')
describe('frogJumps', () => {
  describe('when start is equal to end', () => {
    it('should return 0', () => {
      const result = frogJumps(10, 10, 5)
      expect(result).toEqual(0)
    })
  })
  describe('when start is greater than end', () => {
    it('should return 0', () => {
      const result = frogJumps(100, 10, 5)
      expect(result).toEqual(0)
    })
  })
  describe('when start is less than end', () => {
    it('should return the number jumps rounded up', () => {
      const result = frogJumps(1, 10, 5)
      expect(result).toEqual(2)
    })
  })
  describe('when jump length is zero', () => {
    it('should return 0', () => {
      const result = frogJumps(1, 10, 0)
      expect(result).toEqual(0)
    })
  })
  describe('when jump length is less than zero', () => {
    it('should return 0', () => {
      const result = frogJumps(1, 10, -10)
      expect(result).toEqual(0)
    })
  })
  describe('when jump length is greater than zero', () => {
    it('should return number of jumps rounded up', () => {
      const result = frogJumps(5, 10, 10)
      expect(result).toEqual(1)
    })
  })
  describe('when inputs are not a number', () => {
    it('should return NAN', () => {
      const result = frogJumps('5', 10, 10)
      expect(result).toEqual('NAN')
    })
  })
})
