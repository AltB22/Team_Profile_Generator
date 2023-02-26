# Command Line README Generator    
  [![License site](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit)

  ## Description
  - This application uses JavaScript and Inquirer.js to dynamically create content for an HTML file from the command line interface.  It also utilizes the built in fs module to interact with the file system.  The user will be presented with a series of prompts in the commmand line, the asnwers to which will be rendered as content in a new index.html file which can then be launched in the browser.  The resulting site is intented to serve as a profile page for development teams that incluedes information about the team manager, team engineers, and team interns.
  ## Table of Contents
  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contributing](#contributing)

  [Tests](#tests)

  [Questions](#questions)

  ## Screenshot of Deployed Application

  ![Image of Page Generate by app with Header "My Team Profile" and a number of cards below containing names, roles, and contact info](./assets/Team_Profile_Generator.png)
  
  ## Installation
  - In order to run the app, installation of node.js version 16 or higher is required on the user's device.  In addition, inquirer.js (https://www.npmjs.com/package/inquirer/v/8.2.4) is required to be installed in the parent directory.  Finally, testing features are built in which require jest to be installed also.  To install the proper packages using the integraged command line interface in VS Code, simply run npm init -y followed by npm install (or just npm i).
  ## Usage
  - This application saves time for development team managers who want to quickly and easily generate a profile page for their team which includes information about themselves, their engineers, and their interns.  The app serves as a template and prompts he user to answer a series of questions that are required for output.  Access is via the command line terminal interface.  Please see link for video on proper installation and usage of the application.  

  ## Contributing
  - Developers are welcome to contribute to this project by cloning this GitHub repository to their local device.  Expanding the app's functionality to include additional roles beyond Manager, Engineer, and Intern would be likely the most helpful.  Keep in mind that each role type is defined as a class in the lib directory.  Any new classes would need to extend the intial employee class. 
  ## Tests
  - Once jest is installed on the user's device, tests can be run by entering the command npm run test in the command line.
  ## Questions
  - Please visit my GitHub profile for further information about his project (https://github.com/AltB22)
  - Please email massie.w@gmail.com with additional quesitons.
  ## License
    This application is covered under the MIT license

  [![License site](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit)

  