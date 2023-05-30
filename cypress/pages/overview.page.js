class OverviewPage {

    navigate() {
       cy.visit("/overview");
    }

    get pageContainer() {
        return cy.get(".op-container");
    }

    get activeGrowsDiv() {
        return cy.get("#active-grows");
    }

    get yourBoxesDiv() {
        return cy.get("#your-boxes");
    }

    get pastYieldsDiv() {
        return cy.get("#past-yields");
    }

    get startAGrowButtons() {
        return cy.get("[data-test='Start Grow']");
    }

    get growCards() {
        return cy.get(".op-grow");
    }

    checkThatPageLoads() {
       this.pageContainer.should("exist");
        this.activeGrowsDiv.should("exist");
        this.yourBoxesDiv.should("exist");
        this.pastYieldsDiv.should("exist");
    }
}

export default OverviewPage