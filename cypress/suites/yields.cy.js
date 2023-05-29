import urls from "../util/data"

describe('History Page Suite', () => {

    beforeEach(() => {
        cy.visit(`/login`)
        cy.get("[data-test='Username']").type("Kamil");
        cy.get("[data-test='Password']").type("qazwsx");
        cy.get("[data-test='Login']").click();
        cy.wait(1000);
        cy.visit("/yields");
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