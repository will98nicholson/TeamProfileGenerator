class Employee {
    constructor(name, email, ID) {
        this.name = name;
        this.email = email;
        this.ID = ID;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getID() {
        return this.ID;
    }
    getRole() {
        return "Employee";
    }

}
module.exports = Employee;