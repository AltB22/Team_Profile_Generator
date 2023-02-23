const inquirer = require('inquirer');//const to require installation of inquirer
const fs = require('fs');//indicating interaction with the file system
const generateTeamProfile = require('./utils/generateTeamProfile');
const Manager = require('./lib/Manager');

const team =  [];

function start(){
    inquirer.prompt([
        {
          type: "list",//could be list of types of employees
          name: "employeeType",
          message: "What is your role?",
          choices: ['Manager', 'Engineer', 'Intern', 'Quit'] 
        },
    ]).then(function(answer){
        if(answer.employeeType === "Manager"){
            addManager();
        } else if (answer.employeeType === "Engineer"){
            addEngineer();
        } else if (answer.employeeType === "Intern"){
            addIntern();
        } else {
            createPage()//
        }
    })
}

function addManager(){
    inquirer.prompt([
        {
          type: "input",//could be list of types of employees
          name: "name",
          message: "What is your name?",
        },
    ]).then(function (managerData){
        console.log(managerData)
        const newManager = new Manager(
            managerData.name
        )
        console.log(newManager)
        team.push(newManager)
        start()
    })
}

function addEngineer(){
    inquirer.prompt([
        {
          type: "input",//could be list of types of employees
          name: "name",
          message: "What is your name?",
        },
    ]).then(function (managerData){
        console.log(managerData)
        const newEngineer = new Engineer(
            managerData.name
        )
        console.log(newManager)
        team.push(newManager)
        start()
    })
}



start()
