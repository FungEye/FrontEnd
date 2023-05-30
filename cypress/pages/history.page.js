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

    get tableToggle() {
        return cy.get(".hb-table");
    }

    get graphToggle() {
        return cy.get(".hb-graph");
    }

    get graphRechartsWrapper() {
        return cy.get(".recharts-wrapper");
    }

    get tableWrapper() {
        return cy.get(".MuiTableContainer-root");
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

    toggleTable() {
        this.tableToggle.click();
        cy.wait(1000);
    }

    toggleGraph() {
        this.graphToggle.click();
        cy.wait(1000);
    }

    checkThatTableIsPresent() {
        cy.wait(1000);
        this.tableWrapper.should("exist");
        cy.wait(1000);
    }

    checkThatGraphIsPresent() {
        cy.wait(1000);
        this.graphRechartsWrapper.should("exist");
        cy.wait(1000);
    }
}

export default HistoryPage