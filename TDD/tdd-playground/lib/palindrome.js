module.exports = palindromeChecker = str => {
  if (typeof str !== 'string') return 'error'
  const origValue = str.toLowerCase().replace(/\W+|\d+/g, '')
  if (str.length === 1 || origValue[0] !== origValue[origValue.length - 1])
    return false
  const palindrome = origValue
    .split('')
    .reverse()
    .join('')
  return origValue === palindrome
}
