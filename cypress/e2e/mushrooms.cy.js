import urls from "../util/data"

describe('History Page Suite', () => {

    beforeEach(() => {
        cy.visit(`/login`)
        cy.get("[data-test='Username']").type("Kamil");
        cy.get("[data-test='Password']").type("qazwsx");
        cy.get("[data-test='Login']").click();
        cy.wait(1000);
        cy.visit("/mushrooms›");
    })

    it('Loads page', () => {
        cy.get(".mushroom-page").should("exist");
        cy.get(".start-grow-info").should("exist");
        cy.get(".mushroom-cards").should("exist");
        cy.wait(3000);
        cy.get(".mushroom-card").should("exist");
        cy.get("[data-test='Details']").should("exist");
        cy.get("[data-test='Pick']").should("exist");
    })
})