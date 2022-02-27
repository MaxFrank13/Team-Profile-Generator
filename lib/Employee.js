class Employee {
    constructor(id, name, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return `<p class="id">ID: ${this.id}</p>`;
    }
    getEmail(){
        return `<p class="email">Email: <a href="mailto:${this.email}">${this.email}</a></p>`;
    }
    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;