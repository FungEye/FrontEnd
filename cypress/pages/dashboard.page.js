class DashboardPage {

    navigate() {
       cy.visit("/dashboard/1");
    }

    get pageContainer() {
        return cy.get(".cont");
    }

    get dashboard() {
        return cy.get(".dashboard");
    }

    get mushroomTitle() {
        return cy.get(".mushroom-title");
    }

    get statusRow() {
        return cy.get(".status-row");
    }

    get measurementsDiv() {
        return cy.get(".measurements");
    }

    get registerYieldsDiv() {
        return cy.get(".dashboard-register-yields")
    }

    get yieldWeightInput() {
        return cy.get("[data-test='Weight (grams)']")
    }

    get yieldCommentInput() {
        return cy.get("[data-test='Comment']")
    }

    get registerYieldButton() {
        return cy.get("[data-test='Submit']")
    }

    registerYield(grams, comment) {
        this.yieldWeightInput.type(grams);
        this.yieldCommentInput.type(comment);
        this.registerYieldButton.click();
        cy.wait(2000);
    }

    checkThatPageLoads() {
        this.pageContainer.should("exist");
        this.dashboard.should("exist");
        this.mushroomTitle.should("exist");
        this.statusRow.should("exist");
        this.measurementsDiv.should("exist");
        this.registerYieldsDiv.should("exist");
    }
}

export default DashboardPage