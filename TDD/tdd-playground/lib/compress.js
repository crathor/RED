const numberRegex = /\d+/g
const groupRegex = /([a-z])\1*/gi
const nonLetterRegex = /\W+|_/g

module.exports = str => {
  if (typeof str !== 'string' || str === '' || numberRegex.test(str)) return 0
  compString = str.replace(nonLetterRegex, '')
  return compString.replace(
    groupRegex,
    (currMatch, letter) => letter + currMatch.length
  )
}
