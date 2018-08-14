module.exports = str => {
  if (typeof str !== 'string') return 'error'
  const regex = /\W+|\d|_/g
  const charCount = str
    .replace(regex, '')
    .split('')
    .reduce((acc, letter) => {
      acc[letter] ? acc[letter]++ : (acc[letter] = 1)
      return acc
    }, {})
  return Object.keys(charCount)
    .map(char => char + charCount[char])
    .join('')
}
