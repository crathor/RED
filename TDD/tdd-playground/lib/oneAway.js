module.exports = (word, str) => {
  if (typeof word !== 'string' || typeof str !== 'string') return 0
  if (Math.abs(str.length - word.length) !== 1) return false
  let result = []
  if (word.length > str.length) {
    for (let i = 0; i < word.length; i++) {
      if (null === str.match(word[i])) result.push(false)
      else result.push(word[i])
    }
    return result.length === word.length
      ? result.filter(Boolean).join('') === str
      : false
  } else {
    for (let i = 0; i < str.length; i++) {
      if (null === word.match(str[i])) result.push(false)
      else result.push(str[i])
    }
    return result.length === str.length
      ? result.filter(Boolean).join('') === word
      : false
  }
}
