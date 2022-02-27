const Intern = require('../lib/Intern');

describe("Intern", () => {
    it("should have a school property corresponding to the school the intern is attending", () => {
        expect(new Intern(3, "Sebastian", "seabass@unh.edu", "UNH").school).toBe("UNH");
    })
    describe("getSchool", () => {
        it("should return the intern's school nested in a <p> tag", () => {
            expect(new Intern(3, "Sebastian", "seabass@unh.edu", "UNH").getSchool()).toBe('<p class="school">School: UNH</p>');
        })
    })
    describe("getRole", () => {
        it("should return the intern's role with a safety helmet font awesome icon next to it", () => {
            expect(new Intern(3, "Sebastian", "seabass@unh.edu", "UNH").getRole()).toBe('Intern <i class="fa-solid fa-helmet-safety"></i>');
        })
    })

})