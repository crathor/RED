// const compressString = require('../lib/string-compression.js')
// describe('compressString', () => {
//   describe('when argument is not of type string', () => {
//     it('should return error', () => {
//       const result = compressString(12345)
//       expect(result).toEqual('error')
//     })
//   })
//   describe('when argument is empty', () => {
//     it('should return error', () => {
//       const result = compressString()
//       expect(result).toEqual('error')
//     })
//   })
//   describe('when argument length is 1 and not between a-z', () => {
//     it('should return error', () => {
//       const result = compressString('!')
//       expect(result).toEqual('error')
//     })
//   })
//   describe('when argument is an empty string', () => {
//     it('should return error', () => {
//       const result = compressString('')
//       expect(result).toEqual('error')
//     })
//   })
//   describe('when argument is correct type', () => {
//     it('should return a compressed string of its letters and the count of each', () => {
//       const result = compressString('abbcccaa')
//       expect(result).toEqual('a1b2c3a2')
//     })
//   })
//   describe('when argument is correct type but contains punctuation, numbers or spaces', () => {
//     it('should return compressed string with removed characters', () => {
//       const result = compressString('aab2cc!@_ d')
//       expect(result).toEqual('a2b1c2d1')
//     })
//   })
//   describe('when argument is correct type but contains spaces', () => {
//     it('should return compressed string', () => {
//       const result = compressString('the fox jumped')
//       expect(result).toEqual('t1h1e1f1o1x1j1u1m1p1e1d1')
//     })
//   })
// })

const compress = require('../lib/compress')
describe('String compression', () => {
  describe('When string contains numbers', () => {
    it('should return 0', () => {
      const c = compress('a7bcd')
      expect(c).toEqual(0)
    })
  })
  describe('When string has repeated characters', () => {
    it('should count the characters in place', () => {
      const c = compress('aabccdaa')
      expect(c).toEqual('a2b1c2d1a2')
    })
  })
  describe('When asked to compress not a string', () => {
    it('should return 0', () => {
      const c = compress(420)
      expect(c).toEqual(0)
    })
  })
  describe('When string contains non-letters', () => {
    it('should ignore those and count the letters', () => {
      const c = compress('~~Hello World!!!!~~')
      expect(c).toEqual('H1e1l2o1W1o1r1l1d1')
    })
  })
  describe('When is called without an argument', () => {
    it('should return 0', () => {
      const c = compress()
      expect(c).toEqual(0)
    })
  })
  describe('When is called with an empty string', () => {
    it('should return 0', () => {
      const c = compress('')
      expect(c).toEqual(0)
    })
  })
})
