const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, email, ID, officenumber) {
        super(name, email, ID)
        this.officenumber = officenumber;
    }
    getRole() {
        return "Manager"
    }
    getOffice() {
        return this.officenumber;
    }
}
module.exports = Manager;