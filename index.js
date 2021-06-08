const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const render = require("./lib/html");

init = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Who is the team Manager?",
          name: "name",
        },
        {
          type: "input",
          message: "What's the manager's ID number?:",
          name: "id",
        },
        {
          type: "input",
          message: "Manager's email address:",
          name: "email",
        },
        {
          type: "input",
          message: "Manager's office number:",
          name: "officeNumber",
        },
      ])
      .then((managerResults) => {
        managerResults.role = "Manager";
        const { name, id, email, officeNumber, role } = managerResults;
        const newManager = new Manager(name, id, email, officeNumber, role);
        employees.push(newManager);
        employeeType();
      });
  };