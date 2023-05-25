import urls from "../util/data"

describe('Add New Species Page Suite', () => {

    const baseUrl = urls.local
    function goTo(url) { cy.visit(baseUrl + url) };

    beforeEach(() => {
        cy.visit(`${baseUrl}/login`)
        cy.get("[data-test='Username']").type("Kamil");
        cy.get("[data-test='Password']").type("qazwsx");
        cy.get("[data-test='Login']").click();
        cy.wait(1000);
        goTo("/new");
    })

    it('Loads page', () => {
        cy.get(".cont").should("exist");
        cy.get("#new-species-title").should("exist");
        cy.get(".ans-inputs-row").should("exist");
        cy.get(".phases").should("exist");
        cy.get("#add-mushroom-btn").should("exist");
    })
})