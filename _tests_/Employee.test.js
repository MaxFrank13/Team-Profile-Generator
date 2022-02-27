const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("should have name, id, and email properties", () => {
        const employee = new Employee(1, "Max", "maxfrank13@gmail.com")
        const { id, name, email } = employee;
        expect(id).toBe(1)
        expect(name).toBe("Max")
        expect(email).toBe("maxfrank13@gmail.com")
    });
    describe("getName", () => {
        it("should return the employee's name", () => {
            expect(new Employee(1, "Max", "maxfrank13@gmail.com").getName()).toBe("Max")
        })
    })
    describe("getId", () => {
        it("should return the employee's id nested in a <p> tag", () => {
            expect(new Employee(1, "Max", "maxfrank13@gmail.com").getId()).toBe('<p class="id">ID: 1</p>')
        })
    })
    describe("getEmail", () => {
        it("should return the employee's email nested in an <a> tag which is nested in a <p> tag", () => {
            expect(new Employee(1, "Max", "maxfrank13@gmail.com").getEmail()).toBe('<p class="email">Email: <a href="mailto:maxfrank13@gmail.com">maxfrank13@gmail.com</a></p>')
        })
    })
    describe("getRole", () => {
        it("should return the employee's role", () => {
            expect(new Employee(1, "Max", "maxfrank13@gmail.com").getRole()).toBe("Employee")
        })
    })
});