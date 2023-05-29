class DashboardPage {

    navigate() {
       cy.visit("/dashboard");
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
        cy.get(".dashboard-register-yields")
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