let ageArray = []
let satisfactionArray = []
let passing = []
let failing = []
let projects = {}
module.exports = data => {
  data.forEach(student => {
    ageArray.push(student.age)
    satisfactionArray.push(student.satisfaction)
  })
  let demographics = {
    averageAge: getAverage(ageArray),
    satisfaction: getAverage(satisfactionArray)
  }
  return {
    demographics
  }
}

function getAverage(arr) {
  return (
    arr.reduce((acc = 0, currVal) => {
      acc += currVal
      return acc
    }) / arr.length
  )
}
