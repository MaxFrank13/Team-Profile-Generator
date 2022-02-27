const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const fs = require('fs');
const inquirer = require('inquirer');
const { managerQuestions, internQuestions, engineerQuestions } = require('./lib/questions')

const teamProfile = [];

const init = () => {
    inquirer
        .prompt(managerQuestions)
        .then(({ managerID, managerName, managerEmail, managerOffice, addMember}) => {
            teamProfile.push(new Manager(managerID, managerName, managerEmail, managerOffice))
            promptLoop(addMember);
        })
        .catch(error => console.log(error));
}

function promptLoop(addMember) {
    switch(addMember) {
        case "Intern":
            inquirer
                .prompt(internQuestions)
                .then(({ internID, internName, internEmail, internSchool, addMember }) => {
                    teamProfile.push(new Intern(internID, internName, internEmail, internSchool));
                    promptLoop(addMember);
                });
            break;
        case "Engineer":
            inquirer
                .prompt(engineerQuestions)
                .then(({ engineerID, engineerName, engineerEmail, engineerGithub, addMember }) => {
                    teamProfile.push(new Engineer(engineerID, engineerName, engineerEmail, engineerGithub));
                    promptLoop(addMember);
                });
            break;
        case "No, that's the whole squad!":
            const page = generateHtml();
            fs.writeFile('./dist/index.html', page, (err) => err ? console.error(err) : console.log('Success!'));
            break;
    }
}

const testTeam = [
    {
      name: 'Bill',
      id: '1',
      email: 'bill@billsboxes.com',
      officeNumber: '225'
    },
    {
      name: 'Adam',
      id: '2',
      email: 'adam@adamsapple.com',
      github: 'adamshub'
    },
    {
      name: 'Maxwell',
      id: '3',
      email: 'swellius@malone.com',
      school: 'UNH'
    },
    {
      name: 'Meriadoc',
      id: '4',
      email: 'merry@hobbiton.com',
      school: 'UNH'
    },
    {
      name: 'Gandalf',
      id: '5',
      email: 'getwizzywithit@istari.com',
      github: 'TheRealWhiteWizard'
    }
  ]

function generateHtml(){
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Team Profile</h1>
    </header>
    <main>${generateCards(teamProfile)}
    </main>
</body>
</html>`
}

function generateCards(team){
    return team.map(member => {
        return `
        <section class="card ${member.constructor.name.toLowerCase()}">
            <h2 class="name">${member.getName()}</h2>
            <h3 class="role">${member.getRole()}</h3>
            <section class="info">
                ${member.getId()}
                ${member.getEmail()}
                ${member.constructor.name === "Manager" ?
                 member.getOfficeNum() : 
                 member.constructor.name === "Intern" ? 
                 member.getSchool() : 
                 member.getGithub()}
            </section>
        </section>`
    }).reduce((prev, current) => prev + current);
}

init();