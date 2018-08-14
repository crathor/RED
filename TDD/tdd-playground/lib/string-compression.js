module.exports = str => {
  const regex = /\W+|\d|_/g
  if (typeof str !== 'string' || str.replace(regex, '') === '') return 'error'
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
