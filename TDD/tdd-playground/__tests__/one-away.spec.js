const oneAway = require('../lib/oneAway.js')
describe('oneAway', () => {
  describe('when typeof !== string', () => {
    it('should return 0', () => {
      const result = oneAway(123, 'hello')
      expect(result).toEqual(0)
    })
  })
  describe('when no arguments given', () => {
    it('should return 0', () => {
      const result = oneAway()
      expect(result).toEqual(0)
    })
  })
  describe('when str is 2 chars longer than the word', () => {
    it('should return false', () => {
      const result = oneAway('pale', 'paless')
      expect(result).toEqual(false)
    })
  })
  describe('when str is 2 chars shorter than word', () => {
    it('should return false', () => {
      const result = oneAway('pale', 'pl')
      expect(result).toEqual(false)
    })
  })
  describe('when str is 1 char shorter than word and one letter off', () => {
    it('should return true', () => {
      const result = oneAway('pale', 'ple')
      expect(result).toEqual(true)
    })
  })
  describe('when str is 1 char shorter than word but two letters off', () => {
    it('should return false', () => {
      const result = oneAway('pales', 'pdlp')
      expect(result).toEqual(false)
    })
  })
  describe('when str is 1 char longer than word and one letter off', () => {
    it('should return true', () => {
      const result = oneAway('pales', 'palest')
      expect(result).toEqual(true)
    })
  })
  describe('when str is 1 char longer than word and two letters off', () => {
    it('should return false', () => {
      const result = oneAway('pales', 'paalas')
      expect(result).toEqual(false)
    })
  })
})
