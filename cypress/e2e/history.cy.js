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
        goTo("/history/1");
    })

    it('Loads page', () => {
        cy.get(".historyPageContainer").should("exist");
        cy.get(".historyContainer").should("exist");
        cy.get(".titleContainer").should("exist");
        cy.get(".content-container").should("exist");
        cy.get(".left-container").should("exist");
        cy.get(".right-container").should("exist");
        cy.get(".toggleContainer").should("exist");
        cy.get(".conditions-carousel-history").should("exist");
    })
})