//Below generates card for "Manager"
const generateTeamCards = team => {
    
    const generateManager = function (manager) {
        return `
        <div class="TBD">
            <div class="card">
                <div class="card-header">
                    <h2>${manager.name}</h2>
                    <h3>Manager</h3>
                </div>
    
                <div class="card-body">
                    <p class="employee info">ID:${manager.id}</p>
                    <p class="employee info">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="employee info">Office Number: ${manager.getOfficeNumber()}</p>
                </div>
            </div>
        </div>  
    `;
    }

    const generateEngineer= function (engineer) {
        return `
        <div class="TBD">
            <div class="card">
                <div class="card-header">
                    <h2>${engineer.name}</h2>
                    <h3>Engineer</h3>
                </div>
    
                <div class="card-body">
                    <p class="employee info">ID: ${engineer.id}</p>
                    <p class="employee info">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="employee info">Office Number: ${engineer.getGitHub()}</p>
                </div>
            </div>
        </div>  
    `;
    }

    const generateIntern= function (intern) {
        return `
        <div class="TBD">
            <div class="card">
                <div class="card-header">
                    <h2>${intern.name}</h2>
                    <h3>Intern</h3>
                </div>
    
                <div class="card-body">
                    <p class="employee info">ID: ${intern.id}</p>
                    <p class="employee info">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="employee info">Office Number: ${intern.school}</p>
                </div>
            </div>
        </div>  
    `;
    };

    const html = [];

    html.push(team
        .filter(item => item.getRole()=== 'Manager')
        .map(manager => generateManager(manager))
        );
    html.push(team.filter(item => item.getRole()=== 'Engineer')
        .map(engineer => generateEngineer(engineer))
        );
    html.push(team.filter(item => item.getRole()=== 'Intern')
        .map(intern => generateIntern(intern))
        );

    return html.join('')
    
}

module.exports = (team) => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <span>My Team Profile</span>
    </header>
    <main>
        <div class="container">
            <div class="row jusfify-content-center" id="team-cards">
                ${generateTeamCards(team)}
            </div>
        </div>
    </main>
    
</body>
</html>
`;
};
