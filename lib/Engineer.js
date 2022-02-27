const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, name, email, github){
        super(id, name, email);
        this.github = github;
    }
    getGithub(){
        return `<p class="github">Github: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></p>`;
    }
    getRole(){
        return 'Engineer <i class="fa-solid fa-hat-wizard"></i>';
    }
}

module.exports = Engineer;