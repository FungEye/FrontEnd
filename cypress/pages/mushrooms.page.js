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

    navigate() {
        cy.visit("/mushrooms");
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