import urls from "../util/data"

describe('History Page Suite', () => {

    const baseUrl = urls.local
    function goTo(url) { cy.visit(baseUrl + url) };

    beforeEach(() => {
        cy.visit(`${baseUrl}/login`)
        cy.get("[data-test='Username']").type("Kamil");
        cy.get("[data-test='Password']").type("qazwsx");
        cy.get("[data-test='Login']").click();
        cy.wait(1000);
        goTo("/yields");
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