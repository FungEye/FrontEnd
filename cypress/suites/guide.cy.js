import urls from "../util/data"
import { loginAsKamil } from "../util/loginFunctions"

describe('Guide Page Suite', () => {

    const guidePage = new GuidePage();

    beforeEach(() => {
       loginAsKamil();
       guidePage.navigate();
    })

    it('Loads page', () => {
        cy.get(".guide-page").should("exist");
        cy.get(".cont-guide").should("exist");
        cy.get(".img-600px").should("exist");
    })
})