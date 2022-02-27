const Manager = require('../lib/Manager');

describe("Manager", () => {
    it("should have an office number property corresponding to the manager's office", () => {
        expect(new Manager(1, "Sauron", "theonering@torulethem.all", "20").officeNumber).toBe("20");
    })
    describe("getOfficeNum", () => {
        it("should return the manager's office number nested in a <p> tag", () => {
            expect(new Manager(1, "Sauron", "theonering@torulethem.all", "20").getOfficeNum()).toBe('<p class="office"> Office Number: 20</p>')
        })
    })
    describe("getRole", () => {
        it("should return the manager's role with a crown font awesome icon next to it", () => {
            expect(new Manager(1, "Sauron", "theonering@torulethem.all", "20").getRole()).toBe('Manager <i class="fa-solid fa-crown"></i>')
        })
    })
})