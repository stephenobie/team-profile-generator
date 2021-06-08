const fs = require("fs");
const path = require("path");
const frontEnd = path.resolve(__dirname, "./front-end");

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
    myTeam = card(frontEnd, "name", manager.getName());
    myTeam = card(frontEnd, "id", manager.getId());
    myTeam = card(frontEnd, "role", manager.Role());
    myTeam = card(frontEnd, "email", manager.getEmail());
    myTeam = card(frontEnd, "officeNumber", manager.getNumber());
    
    return myTeam;
};
const renderEngineer = (engineer) => {
    let myTeam = fs.readFileSync(
        path.resolve(frontEnd, "engineer.html"),
        "utf-8"
    );
    myTeam = card(frontEnd, "name", engineer.getName());
    myTeam = card(frontEnd, "id", engineer.getId());
    myTeam = card(frontEnd, "role", engineer.Role());
    myTeam = card(frontEnd, "email", engineer.getEmail());
    myTeam = card(frontEnd, "github", engineer.getGitHub());
    
    return myTeam;
};
const renderIntern = (intern) => {
    let myTeam = fs.readFileSync(
        path.resolve(frontEnd, "intern.html"),
        "utf-8"
    );
    myTeam = card(frontEnd, "name", intern.getName());
    myTeam = card(frontEnd, "id", intern.getId());
    myTeam = card(frontEnd, "role", intern.Role());
    myTeam = card(frontEnd, "email", intern.getEmail());
    myTeam = card(frontEnd, "school", intern.getSchool());
    
    return myTeam;
};
const renderPage = (html) => {
    const myTeam = fs.readFileSync(
        path.resolve(frontEnd, "index.html"),
        "utf-8"
    );
    return card(myTeam, "team", html);
};

module.exports = render;