import urls from "../util/data"
import { loginAsKamil } from "../util/loginFunctions"

describe('Guide Page Suite', () => {


    beforeEach(() => {
       loginAsKamil();
    })

    it('Loads page', () => {
        cy.get(".guide-page").should("exist");
        cy.get(".cont-guide").should("exist");
        cy.get(".img-600px").should("exist");
    })
})