module.exports = data => {
  let ageArray = []
  let satisfactionArray = []

  data.forEach(student => {
    ageArray.push(student.age)
    satisfactionArray.push(student.satisfaction)
  })
  let demographics = {
    averageAge: getAverage(ageArray),
    satisfaction: getAverage(satisfactionArray)
  }
  let projects = {
    project1: {},
    project2: {},
    project3: {},
    project4: {}
  }
  let experience = {}
  return {
    projects,
    experience,
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

function getProjectResults(arr) {}
