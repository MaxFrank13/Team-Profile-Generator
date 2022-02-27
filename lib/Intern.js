const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, name, email, school){
        super(id, name, email);
        this.school = school;
    }
    getSchool(){
        return `<p class="school">School: ${this.school}</p>`;
    }
    getRole(){
        return 'Intern <i class="fa-solid fa-helmet-safety"></i>';
    }
}

module.exports = Intern;