//Below generates card for "Manager"


function generateTeamCards(team){
    
    const generateManager = function (manager) {
        return `
        <div class="TBD">
            <div class="card">
                <div class="card-header">
                    <h3>${manager.name}</h3>
                    <h4>Manager</h4>
                </div>
    
                <div class="card-body">
                    <p class="id">ID: ${manager.id}</p>
                    <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="office">Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
        </div>  
    `;
    }

    const html = []

    html.push(team.filter(item => item.getRole()=== 'Manager').map(manager => generateManager(manager)))


    return html.join('')
    
}

module.exports = (teamArray) => {
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
                ${generateTeamCards(teamArray)}
            </div>
        </div>
    </main>
    
</body>
</html>
`}
