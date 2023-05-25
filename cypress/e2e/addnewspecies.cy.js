import urls from "../util/data"

describe('Add New Species Page Suite', () => {

    
    beforeEach(() => {
        cy.visit("/login")
        cy.get("[data-test='Username']").type("Kamil");
        cy.get("[data-test='Password']").type("qazwsx");
        cy.get("[data-test='Login']").click();
        cy.wait(1000);
        cy.visit("/new");
    })

    it('Loads page', () => {
        cy.get(".cont").should("exist");
        cy.get("#new-species-title").should("exist");
        cy.get(".ans-inputs-row").should("exist");
        cy.get(".phases").should("exist");
        cy.get("#add-mushroom-btn").should("exist");
    })
})