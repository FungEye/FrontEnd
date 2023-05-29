import urls from "../util/data"
import { loginAsKamil } from "../util/loginFunctions"

describe('History Page Suite', () => {

    beforeEach(() => {
        loginAsKamil();
    })

    it('Loads page', () => {
        cy.get(".yield-page").should("exist");
        cy.get(".yield-page-title").should("exist");
        cy.get(".yield-cards").should("exist");
        cy.wait(3000);
        cy.get(".yield-card").should("exist");
        cy.get(".icon-and-history").should("exist");
        cy.get(".yield-value").should("exist");
        cy.get(".yield-grams-label").should("exist");
        cy.get(".yield-grams-value").should("exist");
    })
})