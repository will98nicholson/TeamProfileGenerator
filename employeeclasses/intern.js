const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, email, ID, school) {
        super(name, email, ID)
        this.school = school;
    }
    getRole() {
        return "Intern"
    }
}
module.export = Intern;