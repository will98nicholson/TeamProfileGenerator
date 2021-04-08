const Employee = require('../employeeclasses/employee');

describe('Employee', () => {
    describe('getName', () => {
        it('should return employee enetered name', () => {
            expect(new Manager('William', '1', 'william@office', '101').getName()).toBe('William')

        })
    })
    describe('getEmail', () => {
        it('should return employee email', () => {
            expect(new Manager('William', '1', 'william@office', '101').getEmail()).toBe('william@office')
        })
    })
    describe('getID', () => {
        it('should return employee ID', () => {
            expect(new Manager('William', '1', 'william@office', '101').getID()).toBe('1')
        })
    })
    describe('getRole', () => {
        it('should return employee role', () => {
            expect(new Manager('William', '1', 'william@office', '101').getRole()).toBe('Manager')
        })
    })


})