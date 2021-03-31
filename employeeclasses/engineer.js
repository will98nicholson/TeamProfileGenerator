const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, email, ID, githubID) {
        super(name, email, ID)
        this.githubID = githubID;
    }
    getRole() {
        return "Engineer"
    }
}
module.exports = Engineer;