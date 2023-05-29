class GuidePage {

    navigate() {
        cy.visit("/guide");
    }

    get pageContainer() {
        return cy.get(".guide-page")
    }

    get guideCardDivs() {
        return cy.get(".cont-guide");
    }

    get mushroomLifecycleImage() {
        return cy.get(".img-600px");
    }

    checkThatPageLoads() {
        this.pageContainer.should("exist");
        this.guideCardDivs.should("exist");
        this.mushroomLifecycleImage.should("exist");
    }
}