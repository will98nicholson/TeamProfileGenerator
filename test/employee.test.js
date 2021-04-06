const Manager = require('./employeeclasses/Manager.js');

describe('Employee', () => {
    describe('getName', () => {
        it('should return employee enetered name', () => {
            expect(new Manager('William', '11111', 'william1@office.com', '101').getName()).toBe('William')

        })
    })

})