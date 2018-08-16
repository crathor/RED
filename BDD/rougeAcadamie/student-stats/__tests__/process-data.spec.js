const processData = require('../src/process-data')
describe('Process Data', () => {
  let processedData

  let mockData = [
    {
      name: 'Miss Jermain Waters',
      age: 25,
      yearsExperience: 3,
      satisfaction: 2,
      project1: 'pass',
      project2: 'fail',
      project3: 'fail',
      project4: 'pass'
    },
    {
      name: 'Juliana Runte',
      age: 24,
      yearsExperience: 3,
      satisfaction: 4,
      project1: 'fail',
      project2: 'fail',
      project3: 'fail',
      project4: 'pass'
    },
    {
      name: 'Emmalee Daugherty',
      age: 26,
      yearsExperience: 2,
      satisfaction: 6,
      project1: 'fail',
      project2: 'pass',
      project3: 'pass',
      project4: 'fail'
    }
  ]
  beforeEach(() => {
    processedData = processData(mockData)
  })
  describe('Shape of processed data', () => {
    it('should generate an object with three keys', () => {
      expect(Object.keys(processedData)).toEqual([
        'projects',
        'experience',
        'demographics'
      ])
    })
  })
  describe('Projects', () => {
    it('should create an object for each project', () => {
      expect(Object.keys(processedData.projects)).toEqual([
        'project1',
        'project2',
        'project3',
        'project4'
      ])
    })
    it('should calculate the average satisfaction for passing students', () => {
      const result = processedData.projects.project1.passed
      expect(result).toEqual({
        number: 1,
        satisfaction: 2
      })
    })
    it('should calculate the average satisfaction for failing students', () => {
      const result = processedData.projects.project1.failed
      expect(result).toEqual({
        number: 2,
        satisfaction: 5
      })
    })
  })
  describe('Experience', () => {
    it('should return average satisfaction based on years of experience', () => {
      const result = processedData.experience[3]
      expect(result).toEqual({
        satisfaction: 3
      })
    })
  })
  describe('Demographics', () => {
    it('should return average age and satisfaction for the cohort', () => {
      const result = processedData.demographics
      expect(result).toEqual({
        averageAge: 25,
        satisfaction: 4
      })
    })
  })
})
