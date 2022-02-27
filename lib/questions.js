const managerQuestions = [
    {
        type: 'input',
        message: 'What is the name of the team manager?',
        name: 'managerName'
    },
    {
        type: 'input',
        message: "What is the manager's ID?",
        name: 'managerID'
    },
    {
        type: 'input',
        message: "What is manager's email address?",
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'managerOffice'
    },
    {
        type: 'list',
        message: 'Would you like to add a team member?',
        choices: ["Engineer", "Intern", "No, that's the whole squad!"],
        name: 'addMember'
    }
];

const internQuestions = [
    {
        type: 'input',
        message: 'What is the name of the intern?',
        name: 'internName'
    },
    {
        type: 'input',
        message: "What is the intern's ID?",
        name: 'internID'
    },
    {
        type: 'input',
        message: "What is intern's email address?",
        name: 'internEmail'
    },
    {
        type: 'input',
        message: "What school does the intern attend?",
        name: 'internSchool'
    },
    {
        type: 'list',
        message: 'Would you like to add a team member?',
        choices: ["Engineer", "Intern", "No, that's the whole squad!"],
        name: 'addMember'
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the name of the engineer?',
        name: 'engineerName'
    },
    {
        type: 'input',
        message: "What is the engineer's ID?",
        name: 'engineerID'
    },
    {
        type: 'input',
        message: "What is engineer's email address?",
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: "What is the engineer's github?",
        name: 'engineerGithub'
    },
    {
        type: 'list',
        message: 'Would you like to add a team member?',
        choices: ["Engineer", "Intern", "No, that's the whole squad!"],
        name: 'addMember'
    }
];

module.exports = {
    managerQuestions,
    internQuestions,
    engineerQuestions
}