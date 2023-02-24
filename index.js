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
            message: "What is your employee ID?",
        },
        {
            type: "input",
            name: "emailAddress",
            message: "What is your email address",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?",
        },      

        ])
        .then(answer => {
            const newManager = new Manager(answer.employeeName, answer.employeeId)
            // console.log(newManager)
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
          name: "NewEngineerEmployeeID",
          message: "What will the new Engineer's employee ID be?",
        },
        {
          type: "input",
          name: "NewEngineerEmail",
          message: "What will the new Engineer's email address be?",
        },
        {
          type: "input",
          name: "NewEngineerGitHub",
          message: "What is the new Engineer's GitHub username?",
        },

    ]).then(engineerData => {
        // console.log(engineerData)
        const newEngineer = new Engineer(
            engineerData.name
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
          name: "NewInternEmployeeID",
          message: "What will the new Intern's employee ID be?",
        },
        {
          type: "input",
          name: "NewInternEmail",
          message: "What will the new Intern's email address be?",
        },
        {
          type: "input",
          name: "NewInternGitHub",
          message: "What is the new Intern's GitHub username?",
        },

    ]).then(internData => {
       console.log(internData)
        const newIntern = new Intern (
            internData.name
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

// Alt versions of writeFile Below

// function writeFile() { //TODO Create the output directory if the output path doesn't exist
//     if(!fs.existsSync(OUTPUT_DIR)) {
//         fs.mkdirSync(OUTPUT_DIR) 
//     }
//     fs.writeFileSync(outputPath, render(teamMembers),'utf-8')
//team members has to hold all the answers




    // const generateTeamProfile = generateTeamProfile(answers)
  
    // fs.writeFile('./dist/index.html', createIndexHTML 
    // ,(error) => { //handles errors
    //   if (error) throw new Error("Something went wrong", error)
    // }
    // )
//   }


start()
