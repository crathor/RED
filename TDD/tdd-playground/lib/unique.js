const numberRegex = /\d+/g
const nonLetterRegex = /\W+|_/gi

module.exports = str => {
  if (typeof str !== 'string' || numberRegex.test(str) || !str.length || !str)
    return 0
  const result = str
    .replace(nonLetterRegex, '')
    .split('')
    .reduce((acc, char) => {
      acc[char] ? acc[char]++ : (acc[char] = 1)
      return acc
    }, {})
  return Object.keys(result).filter(key => result[key] === 1)[0]
}
