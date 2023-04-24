const generateMgr = function (manager) {
    return `
        <div class="card-header">
            <h2>${manager.name}</h2>
            <h3>Manager</h3><i class="material-icons">content_paste</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
`;
}

const generateIntern = function (intern) {
    return `
        <div class="card-header">
            <h2>${intern.name}</h2>
            <h3>Intern</h3><i class="material-icons">content_paste</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
`;
}

const generateEngineer = function (engineer) {
    return `
        <div class="card-header">
            <h2>${engineer.name}</h2>
            <h3>Engineer</h3><i class="material-icons">content_paste</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
`;
}


generateHTML = (data) => {

    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateMgr(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }
    }


    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;

}

const generateTeamPage = function (employeeCards) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>

        </head>
        <body>
            <header>
                <nav class="navbar" id="navbar">
                    <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
                </nav>
            </header>
            <main>
                <div class="container">
                    <div class="row justify-content-center" id="team-cards">
                        <!--Team Cards-->
                        ${employeeCards}
                    </div>
                </div>
            </main>
            
        </body>


    `;
}

module.exports = generateHTML;

    