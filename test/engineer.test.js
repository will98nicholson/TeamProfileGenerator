const Engineer = require('./employeeclasses/Engineer.js');

describe('Employee', () => {
    describe('getName', () => {
        it('should return employee enetered name', () => {
            expect(new Engineer('William', '11111', 'william1@office.com', '101').getName()).toBe('William')

        })
    })

})