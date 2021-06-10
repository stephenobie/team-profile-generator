const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const render = require("./lib/html");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employees = [];


  employeeType = () => {
    console.log("What is the employee's role?");
    return inquirer
      .prompt([
        {
          type: "list",
          message: "What is the Employee's role?",
          name: "role",
          choices: ["Engineer", "Intern"],
        },
      ])
      .then((choice) => {
        if (choice.role === "Engineer") {
          addEngineer();
        } else {
          addIntern();
        }
      });
  };
  addEngineer = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "What is the Engineer's name?",
          name: "name",
        },
        {
          type: "input",
          message: "Engineer's employee ID:",
          name: "id",
        },
        {
          type: "input",
          message: "Engineer's email address:",
          name: "email",
        },
        {
          type: "input",
          message: "Engineer's github user name:",
          name: "github",
        },
      ])
      .then((engineerResults) => {
        engineerResults.role = "Engineer";
        const { name, id, email, github, role } = engineerResults;
        const newEngineer = new Engineer(name, id, role, email, github);
        employees.push(newEngineer);
        addEmployee();
      });
  };
  addIntern = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "What is the Intern's name?",
          name: "name",
        },
        {
          type: "input",
          message: "Intern's employee ID:",
          name: "id",
        },
        {
          type: "input",
          message: "Intern's email address:",
          name: "email",
        },
        {
          type: "input",
          message: "Intern's school:",
          name: "school",
        },
      ])
      .then((internResults) => {
        internResults.role = "Intern";
        const { name, id, email, school, role } = internResults;
        const newIntern = new Intern(name, role, id, email, school);
        employees.push(newIntern);
        addEmployee();
      });
  };
  addEmployee = () => {
    return inquirer
      .prompt([
        {
          type: "list",
          message: "Add another team member?",
          name: "add",
          choices: ["Yes", "No"],
        },
      ])
      .then((choice) => {
        if (choice.add === "Yes") {
          employeeType();
        } else {
          renderHtml();
        }
      });
  };

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
        const newManager = new Manager(name, id, role, email, officeNumber);
        employees.push(newManager);
        employeeType();
      });
  };
  renderHtml = () => {
    const buildHTML = render(employees);
    fs.writeFile(outputPath, buildHTML, (err) => {
      if (err) {
        return console.log(err);
      } else {
        return console.log("Your team has been added!");
      }
    });
  };
  
  init();