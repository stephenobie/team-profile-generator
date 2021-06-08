const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = "Engineer";
    }
    getGitHub() {
        return this.github;
    }   
}
module.exports = Engineer;