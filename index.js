const inquirer = require('inquirer');//const to require installation of inquirer
const fs = require('fs');//indicating interaction with the file system
const generateTeamProfile = require('./src/generateTeamProfile');//requires generateTeamProfile.js
const Manager = require('./lib/Manager');//requires Manager Class(from Manager.js file)
const Engineer = require('./lib/Engineer');//requires Engineer Class(from Engineer.js file)
const Intern = require('./lib/Intern');//requires Intern Class(from Intern.js file)


const team =  [];//Empty array to capture the team the gets created

function start(){//starting series of prompt questions as objects in an array
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
        .then(answer => {//Promise using arrow function which allows "answer" to be recognized as data from above sequence
            const newManager = new Manager(answer.employeeName, answer.employeeID, answer.emailAddress, answer.officeNumber)
     
            team.push(newManager)
            menu()
    })
}

function menu(){//list type of prompt to indicate employee type to be added or finish and generate profile
    inquirer.prompt(  {
        type: "list",
        name: "employeeType",
        message: "Select the employee type you would like to add or select finish building team.",
        choices: [ 'Engineer', 'Intern', 'Finish Building Team'] 
    }).then((answer)=>{
        switch(answer.employeeType){//switch/case here replaced an older if else if statement to qualify the which function to call next.
        
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



function addEngineer(){//Engineer question prompts
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

function addIntern(){//Intern question prompts
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
          name: "newInternSchool",
          message: "What is the new Intern's school?",
        },

    ]).then(internData => {
       console.log(internData)
        const newIntern = new Intern (
            internData.name, internData.newInternEmployeeID, internData.newInternEmail, internData.newInternSchool
        )
        // console.log(newIntern)
        team.push(newIntern)
        menu()
    })
}

const writeToFile = () => {//writes to file to generate the new index.html profile content.  Team contains the data.
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
