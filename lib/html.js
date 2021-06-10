const fs = require("fs");
const path = require("path");
const frontEnd = path.resolve(__dirname, "../front-end");

const render = (employees) => {
    const html = [];

    html.push(
        ...employees
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => renderManager(manager))
    );
    html.push(
        ...employees
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => renderEngineer(engineer))
    );
    html.push(
        ...employees
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => renderIntern(intern))
    );
    return renderPage(html.join(""));
};
const renderManager = (manager) => {
    let myTeam = fs.readFileSync(
        path.resolve(frontEnd, "manager.html"),
        "utf-8"
    );
    myTeam = card(myTeam, "name", manager.getName());
    myTeam = card(myTeam, "id", manager.getId());
    myTeam = card(myTeam, "role", manager.getRole());
    myTeam = card(myTeam, "email", manager.getEmail());
    myTeam = card(myTeam, "officeNumber", manager.getNumber());
    
    return myTeam;
};
const renderEngineer = (engineer) => {
    let myTeam = fs.readFileSync(
        path.resolve(frontEnd, "engineer.html"),
        "utf-8"
    );
    myTeam = card(myTeam, "name", engineer.getName());
    myTeam = card(myTeam, "id", engineer.getId());
    myTeam = card(myTeam, "role", engineer.getRole());
    myTeam = card(myTeam, "email", engineer.getEmail());
    myTeam = card(myTeam, "github", engineer.getGitHub());
    
    return myTeam;
};
const renderIntern = (intern) => {
    let myTeam = fs.readFileSync(
        path.resolve(frontEnd, "intern.html"),
        "utf-8"
    );
    myTeam = card(myTeam, "name", intern.getName());
    myTeam = card(myTeam, "id", intern.getId());
    myTeam = card(myTeam, "role", intern.getRole());
    myTeam = card(myTeam, "email", intern.getEmail());
    myTeam = card(myTeam, "school", intern.getSchool());
    
    return myTeam;
};
const renderPage = (html) => {
    const myTeam = fs.readFileSync(
        path.resolve(frontEnd, "index.html"),
        "utf-8"
    );
    return card(myTeam, "team", html);
};

const card = (myTeam, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return myTeam.replace(pattern, value);
  };

module.exports = render;