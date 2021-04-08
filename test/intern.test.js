const Intern = require('../employeeclasses/intern');

describe('Employee', () => {
    describe('getName', () => {
        it('should return employee enetered name', () => {
            expect(new Intern('William', '1', 'william@office', 'wisco').getName()).toBe('William')

        })
    })
    describe('getID', () => {
        it('should return employee ID', () => {
            expect(new Intern('William', '1', 'william@office', 'wisco').getID()).toBe('1')
        })
    })
    describe('getEmail', () => {
        it('should return employee email', () => {
            expect(new Intern('William', '1', 'william@office', 'wisco').getEmail()).toBe('william@office')
        })
    })
    describe('getRole', () => {
        it('should return employee role', () => {
            expect(new Intern('William', '1', 'william@office', 'wisco').getRole()).toBe('Intern')
        })
    })
    describe('getSchool', () => {
        it('should return employee role', () => {
            expect(new Intern('William', '1', 'william@office', 'wisco').getSchool()).toBe('wisco')
        })
    })


})