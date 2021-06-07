const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = "Intern";
    }
    getSchool() {
        return this.school;
    }   
}
module.exports = Intern;