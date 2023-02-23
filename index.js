const inquirer = require('inquirer');//const to require installation of inquirer
const fs = require('fs');//indicating interaction with the file system
const generateTeamProfile = require('./src/generateTeamProfile');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');


const team =  [];

function start(){
    inquirer.prompt([
        {
          type: "input",//could be list of types of employees
          name: "employeeType",
          message: "What is the team Manager's name?",
        //   choices: ['William', 'Brian', 'James', 'Marcia'] 
        },
        {
            type: "list",
            name: "employee ID",
            message: "What is your employee ID?",
            choices: ['123', '456', '789', 'Quit'] 
          },
          {
            type: "input",
            name: "Email Address",
            message: "What is your email address",
          },
          {
            type: "list",
            name: "Office Number",
            message: "What is your office number?",
            choices: ['1', '2', '3', '4', '5', 'Quit'] 
          },
    ]).then(function(answer){
        if(answer.employeeType === "Manager"){
            addManager();
        } else if (answer.employeeType === "Engineer"){
            addEngineer();
        } else if (answer.employeeType === "Intern"){
            addIntern();
        } else {
            writeToFile()//
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
    ]).then(function (engineerData){
        console.log(engineerData)
        const newEngineer = new Engineer(
            engineerData.name
        )
        console.log(newManager)
        team.push(newManager)
        start()
    })
}

function writeToFile(answers) { 
    const generateTeamProfile = generateTeamProfile()//calls function passing answers object as argument
  
    fs.writeFile('./dist/index.html', createIndexHTML //writes output to README file in readme_output directory
    ,(error) => { //handles errors
      if (error) throw new Error("Something went wrong", error)
    }
    )
  }


start()
