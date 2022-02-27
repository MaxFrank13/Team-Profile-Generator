const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, officeNumber){
        super(id, name, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNum(){
        return `<p class="office"> Office Number: ${this.officeNumber}</p>`
    }
    getRole(){
        return 'Manager <i class="fa-solid fa-crown"></i>';
    }
}

module.exports = Manager;