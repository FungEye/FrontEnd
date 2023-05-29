import AddNewSpeciesPage from "./addNewSpecies.page";
class MushroomsPage {

    get mushroomCards() {
        return cy.get(".mushroom-card");
    }

    get firstTestMushroomCardSelector() {
        return "[data-test='Test Shroom']";
    }

    get firstTestMushroomCard() {
       return cy.get("[data-test='Test Shroom']").first();
    }

    get lastMushroomCard() {
        return this.mushroomCards.last();
    }

    get editMushroomButton() {
        return cy.get("[data-test='Edit']");
    }

    get pageContainer() {
        return cy.get(".mushroom-page");
    }

    get startGrowInfo() {
        return cy.get(".start-grow-info");
    }

    get mushroomCardsContainer() {
        return cy.get(".mushroom-cards");
    }

    navigate() {
        cy.visit("/mushrooms");
    }

    get detailsButtons() {
        return cy.get("[data-test='Details']");
    }

    get pickButtons() {
        return cy.get("[data-test='Pick']");
    }

    checkThatPageLoads() {
        this.pageContainer.should("exist");
        this.startGrowInfo.should("exist");
        this.mushroomCardsContainer.should("exist");
        cy.wait(3000);
        this.mushroomCards.should("exist");
        this.detailsButtons.should("exist");
        this.pickButtons.should("exist");
    }

    checkMushroomName(mushroomCardSelector, name) {
        const mushroomCard = mushroomCardSelector;
        mushroomCard.children().first().should("contain", name);
    }

    openMushroomDetails(mushroomCardSelector) {
        mushroomCardSelector.children().eq(1).children().first().click();
    }

    checkIfTestMushroomIsPresent() {
        this.checkMushroomName(this.firstTestMushroomCard, "Test Shroom");
    }

    checkIfTestMushroomIsNotPresent() {
        cy.wait(2000);
       cy.get(this.firstTestMushroomCardSelector).should("not.exist");
    }

    checkMushroomDetails(mushroomCardSelector, mushroomObject) {
        this.openMushroomDetails(mushroomCardSelector);
    }

    archiveTestMushroomAsAdmin() {
        const addNewSpeciesPage = new AddNewSpeciesPage();
        this.openMushroomDetails(this.firstTestMushroomCard);
        this.editMushroomButton.click();
        addNewSpeciesPage.archiveMushroomAsAdminButton.click();
        cy.wait(1000);
    }
}

export default MushroomsPage