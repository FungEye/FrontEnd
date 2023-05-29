import urls from "../util/data"
import { loginAsAdmin, loginAsKamil } from "../util/loginFunctions";
import MushroomsPage from "../pages/mushrooms.page";

describe('Mushroom Page Suite', () => {

    const mushroomsPage = new MushroomsPage();

    function goToPage() {
        cy.visit("/mushrooms");
    }

    it('Loads page', () => {
        loginAsKamil();
        cy.visit("/mushrooms");
        cy.get(".mushroom-page").should("exist");
        cy.get(".start-grow-info").should("exist");
        cy.get(".mushroom-cards").should("exist");
        cy.wait(3000);
        cy.get(".mushroom-card").should("exist");
        cy.get("[data-test='Details']").should("exist");
        cy.get("[data-test='Pick']").should("exist");
    })

    it('Check for TestShroom', () => {
        loginAsKamil();
        goToPage();
        mushroomsPage.checkIfTestMushroomIsPresent();
    })

    it('Archive Test Shroom', () => {
        loginAsAdmin();
        goToPage();
        mushroomsPage.archiveTestMushroomAsAdmin();
    })

    it.only('Check if Test Shroom is not present', () => {
        loginAsKamil();
        goToPage();
        mushroomsPage.checkIfTestMushroomIsNotPresent();
    })

})