module.exports = arr => {
  if (!arr || !arr.length || !Array.isArray(arr)) return 0
  let result = []

  for (let i = 0; i < arr.length; ++i) {
    if (typeof arr[i] !== 'number') return 0
    if (0 <= arr[i]) {
      result[arr[i]] = true
    }
  }

  for (let i = 1; i <= arr.length; ++i) {
    if (undefined === result[i]) {
      return i
    }
  }

  return 1
}

// https://codereview.stackexchange.com/questions/179037/given-an-array-of-integers-return-the-smallest-positive-integer-not-in-it
