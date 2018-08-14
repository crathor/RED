module.exports = str => {
  const regex = /\W+|\d|_/g

  const charCount = str
    .replace(regex, '')
    .split('')
    .reduce((total, letter) => {
      total[letter] ? total[letter]++ : (total[letter] = 1)
      return total
    }, {})
  return Object.keys(charCount)
    .map(char => char + charCount[char])
    .join('')
}
