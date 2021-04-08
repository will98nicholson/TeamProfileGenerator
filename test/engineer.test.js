const Engineer = require('../employeeclasses/engineer');

describe('Employee', () => {
    describe('getName', () => {
        it('should return employee enetered name', () => {
            expect(new Engineer('William', '1', 'william@office', 'will98').getName()).toBe('William')

        })
    })
    describe('getID', () => {
        it('should return employee ID', () => {
            expect(new Engineer('William', '1', 'william@office', 'will98').getID()).toBe('1')
        })
    })
    describe('getEmail', () => {
        it('should return employee email', () => {
            expect(new Engineer('William', '1', 'william@office', 'will98').getEmail()).toBe('william@office')
        })
    })
    describe('getRole', () => {
        it('should return employee role', () => {
            expect(new Engineer('William', '1', 'william@office', 'will98').getRole()).toBe('Engineer')
        })
    })
    describe('getGithubID', () => {
        it('should return employee role', () => {
            expect(new Engineer('William', '1', 'william@office', 'will98').getGithubID()).toBe('will98')
        })
    })


})