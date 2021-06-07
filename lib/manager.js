const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    getNumber() {
        return this.officeNumber;
    }   
}
module.exports = Manager;