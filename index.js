const generateHTML = require('./src/genHTML');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

const teamArr = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Type the name of the manager',
        },
        {
            type: 'input',
            name: 'id',
            message: "Please type the manager's ID",
            
        },
        {
            type: 'input',
            name: 'email',
            message: "Please type the manager's email address",
            
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please type the manager's office number",
 
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArr.push(manager);
        console.log(manager);
    })
};

//add employee prompt
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose employee role",
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Type employee name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: "Please type the employee ID",
  
        },
        {
            type: 'input',
            name: 'e-mail',
            message: "Please type employee's e-mail",
 
        },
        {
            type: 'input',
            name: 'github username',
            message: "Please type employee's github username",
            when: (input) => input.role === "Engineer",
 
        },
        {
            type: 'input',
            name: 'school',
            message: "Please type the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please type the intern's school")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        let {role, name, id, email, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArr.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArr);
        } else {
            return teamArr;
        }
    })
};

//function to generate the HTML page into the dist folder
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profiles have been generated. Check the index.html")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArr => {
        return generateHTML(teamArr);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });