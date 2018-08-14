module.exports = frogJumps = (start, end, ln) => {
  if (
    typeof start !== 'number' ||
    typeof end !== 'number' ||
    typeof ln !== 'number'
  )
    return 'NAN'
  if (start > end || ln <= 0) return 0
  return Math.ceil((end - start) / ln)
}
