const inquirer = require('inquirer');//const to require installation of inquirer
const fs = require('fs');//indicating interaction with the file system
const generateTeamProfile = require('./src/generateTeamProfile');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer')


const team =  [];

function start(){
    inquirer.prompt([
        {
          type: "input",//could be list of types of employees
          name: "employeeName",
          message: "What is the team Manager's name?",
        //   choices: ['William', 'Brian', 'James', 'Marcia'] 
        },
        {
            type: "list",
            name: "employeeID",
            message: "What is your employee ID?",
            choices: ['123', '456', '789', 'Quit'] 
        },
        {
            type: "input",
            name: "emailAddress",
            message: "What is your email address",
        },
        {
            type: "list",
            name: "officeNumber",
            message: "What is your office number?",
            choices: ['1', '2', '3', '4', '5', 'Quit'] 
        },
        {
            type: "list",
            name: "employeeType",
            message: "Which type of employee would you like to add?",
            choices: ['Manager', 'Engineer', 'Intern', 'Finish Building Team'] 
        },

        ])
        .then(answer => {//can try switch / case here
            // console.log(answer)
            switch(answer.employeeType){
                case "Manager": 
                    addManager();
                break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addEngineer();
                    break;
                case "Finish Building Team":
                    writeToFile();
            }
        // if(answer.employeeType === "Manager"){
        //     addManager();
        // } else if (answer.employeeType === "Engineer"){
        //     addEngineer();
        // } else if (answer.employeeType === "Intern"){
        //     addIntern();
        // } else {
        //     writeToFile()//
        // }
    })
}

function addManager(){
    inquirer.prompt([
        {
            type: "input",//could be list of types of employees
            name: "name",
            message: "What is the new Manager's name?",
          },
          {
            type: "input",
            name: "newManagerEmployeeID",
            message: "What will the new Manager's employee ID be?",
          },
          {
            type: "input",
            name: "newManagerEmail",
            message: "What will the new Manager's email address be?",
          },
          {
            type: "input",
            name: "newManagerGitHub",
            message: "What is the new Manager's GitHub username?",
          },
    ]).then (managerData => {
        console.log(managerData)
        const newManager = new Manager(
            managerData.name
        )
        // console.log(newManager)
        team.push(newManager)
        start()
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
          name: "New Engineer Employee ID",
          message: "What will the new Engineer's employee ID be?",
        },
        {
          type: "input",
          name: "New Engineer Email",
          message: "What will the new Engineer's email address be?",
        },
        {
          type: "input",
          name: "New Engineer GitHub",
          message: "What is the new Engineer's GitHub username?",
        },

    ]).then(engineerData => {
        // console.log(engineerData)
        const newEngineer = new Engineer(
            engineerData.name
        )
        console.log(newEngineer)
        team.push(newEngineer)
        start()
    })
}

function writeToFile() { //TODO Create the output directory if the output path doesn't exist
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR) 
    }
    fs.writeFileSync(outputPath, render(teamMembers),'utf-8')
//team members has to hold all the answers


    // const generateTeamProfile = generateTeamProfile(answers)
  
    // fs.writeFile('./dist/index.html', createIndexHTML 
    // ,(error) => { //handles errors
    //   if (error) throw new Error("Something went wrong", error)
    // }
    // )
  }


start()
