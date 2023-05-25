import urls from "../util/data"

describe('Dashboard Page Suite', () => {


    beforeEach(() => {
        cy.visit(`/login`)
        cy.get("[data-test='Username']").type("Kamil");
        cy.get("[data-test='Password']").type("qazwsx");
        cy.get("[data-test='Login']").click();
        cy.wait(1000);
        cy.visit("/dashboard/1");
    })

    it('Loads page', () => {
        cy.get(".cont").should("exist");
        cy.get(".dashboard").should("exist");
        cy.get(".mushroom-title").should("exist");
        cy.get(".status-row").should("exist");
        cy.get(".measurements").should("exist");
        cy.get(".dashboard-register-yields").should("exist");
    })
})