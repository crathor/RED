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
    project1: getProjectStats(1, data),
    project2: getProjectStats(2, data),
    project3: getProjectStats(3, data),
    project4: getProjectStats(4, data)
  }
  let experience = {
    1: getExperienceStats(1, data),
    2: getExperienceStats(2, data),
    3: getExperienceStats(3, data),
    4: getExperienceStats(4, data),
    5: getExperienceStats(5, data),
    6: getExperienceStats(6, data)
  }
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

function getExperienceStats(yearsOfExp, data) {
  let rating = []
  data.forEach(student => {
    if (student.yearsExperience === yearsOfExp) {
      rating.push(student.satisfaction)
    }
  })
  if (rating.length >= 1) {
    return {
      satisfaction: getAverage(rating)
    }
  }
  return {}
}

function getProjectStats(projectNumber, data) {
  let pass = []
  let fail = []
  data.forEach(student => {
    if (student[`project${projectNumber}`] === 'pass') {
      pass.push(student.satisfaction)
    } else if (student[`project${projectNumber}`] === 'fail')
      fail.push(student.satisfaction)
  })
  return {
    passed: {
      number: pass.length,
      satisfaction: getAverage(pass)
    },
    failed: {
      number: fail.length,
      satisfaction: getAverage(fail)
    }
  }
}
