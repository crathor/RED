const StudentStats = require('../src/student-stats.js')
describe('Student Stats', () => {
  let statsMachine, processedData
  beforeEach(() => {
    statsMachine = new StudentStats('../src/data.json')
    processedData = {
      projects: {
        project1: {
          passed: { number: 10, satisfaction: 10 },
          failed: { number: 10, satisfaction: 10 }
        }
      },
      experience: {
        1: { satisfaction: 10 },
        2: { satisfaction: 10 },
        3: { satisfaction: 10 }
      },
      demographics: {
        averageAge: 10,
        satisfaction: 10
      }
    }
  })

  it('Should load the JSON ', () => {
    expect(statsMachine).toBeDefined()
    expect(statsMachine.data[0].name).toEqual('Miss Jermain Waters')
  })

  describe('Query project by name', () => {
    describe('when project name does not exist', () => {
      it('should throw an error', () => {
        expect(() => statsMachine.getProjectByName('aaa')).toThrow(
          'Invalid project provided'
        )
      })
    })
    describe('when project name exist', () => {
      it('should return the correct stats', () => {
        expect(statsMachine.getProjectByName('project1')).toEqual(
          processedData.projects['project1']
        )
      })
    })
  })
})
