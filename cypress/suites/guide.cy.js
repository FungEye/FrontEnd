import urls from "../util/data"

describe('Guide Page Suite', () => {


    beforeEach(() => {
        cy.visit(`login`)
        cy.get("[data-test='Username']").type("Kamil");
        cy.get("[data-test='Password']").type("qazwsx");
        cy.get("[data-test='Login']").click();
        cy.wait(1000);
        cy.visit("/guide");
    })

    it('Loads page', () => {
        cy.get(".guide-page").should("exist");
        cy.get(".cont-guide").should("exist");
        cy.get(".img-600px").should("exist");
    })
})