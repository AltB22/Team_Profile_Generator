const inquirer = require('inquirer');//const to require installation of inquirer
const fs = require('fs');//indicating interaction with the file system
const generateTeamProfile = require('./src/generateTeamProfile');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const team =  [];

function start(){
    inquirer.prompt([
       
        {
            type: "input",
            name: "employeeName",
            message: "What is the team Manager's name?",
        },
        {
            type: "input",
            name: "employeeID",
            message: "What is the team Manager's employee ID?",
        },
        {
            type: "input",
            name: "emailAddress",
            message: "What is the team Manager's email address",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team Manager's office number?",
        },      

        ])
        .then(answer => {
            const newManager = new Manager(answer.employeeName, answer.employeeID, answer.emailAddress, answer.officeNumber)
     
            team.push(newManager)
            menu()
    })
}

function menu(){
    inquirer.prompt(  {
        type: "list",
        name: "employeeType",
        message: "Select the employee type you would like to add or select finish building team.",
        choices: [ 'Engineer', 'Intern', 'Finish Building Team'] 
    }).then((answer)=>{
        switch(answer.employeeType){
        
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
           default:
                writeToFile();
        }

    })
}



function addEngineer(){
    inquirer.prompt([
        {
          type: "input",//could be list of types of employees
          name: "name",
          message: "What is the new Engineer's name?",
        },
        {
          type: "input",
          name: "newEngineerEmployeeID",
          message: "What will the new Engineer's employee ID be?",
        },
        {
          type: "input",
          name: "newEngineerEmail",
          message: "What will the new Engineer's email address be?",
        },
        {
          type: "input",
          name: "newEngineerGitHub",
          message: "What is the new Engineer's GitHub username?",
        },

    ]).then(engineerData => {
        // console.log(engineerData)
        const newEngineer = new Engineer(engineerData.name, engineerData.newEngineerEmployeeID, engineerData.newEngineerEmail, engineerData.newEngineerGitHub
        )
        // console.log(newEngineer)
        team.push(newEngineer)
        menu()
    })
}

function addIntern(){
    inquirer.prompt([
        {
          type: "input",//could be list of types of employees
          name: "name",
          message: "What is the new Intern's name?",
        },
        {
          type: "input",
          name: "newInternEmployeeID",
          message: "What will the new Intern's employee ID be?",
        },
        {
          type: "input",
          name: "newInternEmail",
          message: "What will the new Intern's email address be?",
        },
        {
          type: "input",
          name: "newInternGitHub",
          message: "What is the new Intern's GitHub username?",
        },

    ]).then(internData => {
       console.log(internData)
        const newIntern = new Intern (
            internData.name, internData.newInternEmployeeID, internData.newInternEmail, internData.newInternGitHub
        )
        // console.log(newIntern)
        team.push(newIntern)
        menu()
    })
}

const writeToFile = () => {
    fs.writeFile('./dist/index.html', generateTeamProfile(team), err => {
        if(err){
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been generated. See index.html")
        }
    })
}

start()
