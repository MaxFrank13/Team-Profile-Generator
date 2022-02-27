const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should have a github property populated with the engineer's github username", () => {
        const engineer = new Engineer(2, "Gandalf", "getwizzywithit@middleearth.arda", "theRealWhiteWizard");
        expect(engineer.github).toBe("theRealWhiteWizard");
    })
    describe("getGithub", () => {
        it("should return the engineer's github nested in an <a> tag which is nested in a <p> tag", () => {
            expect(new Engineer(2, "Gandalf", "getwizzywithit@middleearth.arda", "theRealWhiteWizard").getGithub()).toBe('<p class="github">Github: <a href="https://github.com/theRealWhiteWizard" target="_blank">theRealWhiteWizard</a></p>')
        })
    })
    describe("getRole", () => {
        it("should return the engineer's role with a wizard hat font awesome icon next to it", () => {
            expect(new Engineer(2, "Gandalf", "getwizzywithit@middleearth.arda", "theRealWhiteWizard").getRole()).toBe('Engineer <i class="fa-solid fa-hat-wizard"></i>')
        })
    })
})