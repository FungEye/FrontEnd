class HistoryPage {

    navigate() {
       cy.visit("/history/1");
    }

    get pageContainer() {
        return cy.get(".historyPageContainer");
    }

    get pageCardContainer() {
        return cy.get(".historyContainer");
    }

    get titleDiv() {
        return cy.get(".titleContainer");
    }

    get contentDiv() {
        return cy.get(".content-container");
    }

    get leftContentDiv() {
        return cy.get(".left-container");
    }

    get rightContentDiv() {
        return cy.get(".right-container");
    }

    get toggleDiv() {
        return cy.get(".toggleContainer");
    }

    get conditionsCarouselHistory() {
        return cy.get(".conditions-carousel-history");
    }

    checkThatPageLoads() {
        this.pageContainer.should("exist");
        this.pageCardContainer.should("exist");
        this.titleDiv.should("exist");
        this.contentDiv.should("exist");
        this.leftContentDiv.should("exist");
        this.rightContentDiv.should("exist");
        this.toggleDiv.should("exist");
        this.conditionsCarouselHistory.should("exist");
    }
}