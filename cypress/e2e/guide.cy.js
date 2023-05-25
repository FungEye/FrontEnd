import urls from "../util/data"

describe('Guide Page Suite', () => {

    const baseUrl = urls.local
    function goTo(url) { cy.visit(baseUrl + url) };

    beforeEach(() => {
        cy.visit(`${baseUrl}/login`)
        cy.get("[data-test='Username']").type("Kamil");
        cy.get("[data-test='Password']").type("qazwsx");
        cy.get("[data-test='Login']").click();
        cy.wait(1000);
        goTo("/guide");
    })

    it('Loads page', () => {
        cy.get(".guide-page").should("exist");
        cy.get(".cont-guide").should("exist");
        cy.get(".img-600px").should("exist");
    })
})