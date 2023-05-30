import AddNewSpeciesPage from "./addnewspecies.page";
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

    get originValue() {
        return cy.get("#md-origin-value");
    }


    get descriptionValue() {
        return cy.get("#md-description-value");
    }

    get modalXButton() {
        return cy.get(".x-button");
    }

    get modalTitle() {
        return cy.get(".md-modal-body-title");
    }
   

    goToEditMushroom(mushroomName) {
        const selector = this.getMushroomCardSelectorByName(mushroomName);
        this.openMushroomDetails(selector);
        this.pressEditButton();
        cy.wait(5000);
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

    closeDetailsModal() {
        this.modalXButton.click();
        cy.wait(1000);
    }

    getMushroomCardSelectorByName(mushroomName) {
        return cy.get(`[data-test="${mushroomName}"]`);
    }

    checkMushroomNameInCard(mushroomCardSelector, name) {
        const mushroomCard = mushroomCardSelector;
        mushroomCard.children().first().should("contain", name);
    }

    checkMushroomNameInModal(mushroomCardSelector, name) {
        this.openMushroomDetails(mushroomCardSelector);
        this.modalTitle.should("contain", name);
    }

    checkMushroomImageURL(mushroomCardSelector, imgurl) {
        const mushroomCard = mushroomCardSelector;
        mushroomCard.children().eq(0).children().eq(1).should('have.attr', 'src', imgurl)
    }

    checkMushroomOrigin(mushroomCardSelector, origin) {
        this.openMushroomDetails(mushroomCardSelector);
        this.originValue.should("contain", origin);

    }

    checkMushroomDescription(mushroomCardSelector, description) {
        this.openMushroomDetails(mushroomCardSelector);
        this.descriptionValue.should("contain", description);
    }

    pickMushroom(selector) {
        selector.children().eq(1).children().eq(1).click();
    }

    openMushroomDetails(mushroomCardSelector) {
        mushroomCardSelector.children().eq(1).children().first().click();
    }

    checkIfTestMushroomIsPresent() {
        this.checkMushroomNameInCard(this.firstTestMushroomCard, "Test Shroom");
    }

    pressEditButton() {
        this.editMushroomButton.click();
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
        this.pressEditButton();
        addNewSpeciesPage.archiveMushroomAsAdminButton.click();
        cy.wait(1000);
    }
}

export default MushroomsPage