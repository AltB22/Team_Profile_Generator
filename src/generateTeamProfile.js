//Below generates the various employees cards using template literals to create HTML content
const generateTeamCards = team => {
    
    const generateManager = function (manager) {//Creates manager card
        return `
        <div class="col-4 mt-4">
            <div class="card" h-100>
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
        </div>`;
    }

    const generateEngineer= function (engineer) {//Creates engineer card
        return `
        <div class="col-4 mt-4">
            <div class="card" h-100>
                <div class="card-header">
                    <h2>${engineer.name}</h2>
                    <h3>Engineer</h3>
                </div>
    
                <div class="card-body">
                    <p class="employee info">ID: ${engineer.id}</p>
                    <p class="employee info">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="employee info">GitHub Profile: ${engineer.getGitHub()}</p>
                </div>
            </div>
        </div>`;
    }

    const generateIntern= function (intern) {//Creates intern card
        return `
        <div class="col-4 mt-4">
            <div class="card" h-100>
                <div class="card-header">
                    <h2>${intern.name}</h2>
                    <h3>Intern</h3>
                </div>
    
                <div class="card-body">
                    <p class="employee info">ID: ${intern.id}</p>
                    <p class="employee info">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="employee info">School: ${intern.school}</p>
                </div>
            </div>
        </div>`;
    };

    const html = [];//empty array to capture the pushed items from above into

    html.push(team
        .filter(item => item.getRole()=== 'Manager')
        .map(manager => generateManager(manager))
        );
    html.push(team
        .filter(item => item.getRole()=== 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join('')
        );
    html.push(team
        .filter(item => item.getRole()=== 'Intern')
        .map(intern => generateIntern(intern))
        .join('')
        );

    return html.join("")//joins the array into a string
    
}

module.exports = (team) => { //exports the team array as one join HTML content

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Page</title>
    <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.ess">
    <link href="https://fonts.googleapis.com/ess?family-Public+Sans:3001,300,500&display-swap"rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
        <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team Profile</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row jusfify-content-center" id="team-cards">
                ${generateTeamCards(team)}
            </div>
        </div>
    </main>
    
</body>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</html>`;
};
