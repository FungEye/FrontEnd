class YieldsPage {

    navigate() {
       cy.visit("/yields");
    }

    get pageContainer() {
        return cy.get(".yield-page");
    }

    get pageTitle() {
        return cy.get(".yield-page-title");
    }

    get yieldCardsContainer() {
        return cy.get(".yield-cards");
    }

    get yieldCards() {
        return cy.get(".yield-card");
    }

    get iconAndHistoryDivs() {
        return cy.get(".icon-and-history");
    }

    get yieldValueDivs() {
        return cy.get(".yield-value");
    }

    get yieldGramsLabelDivs() {
        return cy.get(".yield-grams-label");
    }

    get yieldGramsValueDivs() {
        return cy.get(".yield-grams-value");
    }

    checkThatPageLoads() {
        this.pageContainer.should("exist");
        this.pageTitle.should("exist");
        this.yieldCardsContainer.should("exist");
        cy.wait(3000);
        this.yieldCards.should("exist");
        this.iconAndHistoryDivs.should("exist");
        this.yieldValueDivs.should("exist");
        this.yieldGramsLabelDivs.should("exist");
        this.yieldGramsValueDivs.should("exist");
    }
}