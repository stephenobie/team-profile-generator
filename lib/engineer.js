const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }
    getGitHub() {
        return this.github;
    } 
    getRole() {
        return "Engineer";
    }  
}
module.exports = Engineer;