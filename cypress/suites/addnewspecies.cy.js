import { logOut, loginAsAdmin, loginAsKamil } from "../util/loginFunctions";
import MushroomsPage from "../pages/mushrooms.page";
import AddNewSpeciesPage from "../pages/addNewSpecies.page";

describe('Add New Species Page Suite', () => {

    const addNewSpeciesPage = new AddNewSpeciesPage();
    const mushroomsPage = new MushroomsPage();

    it('Loads page', () => {
        loginAsKamil();
        addNewSpeciesPage.navigate();
        cy.get(".cont").should("exist");
        cy.get("#new-species-title").should("exist");
        cy.get(".ans-inputs-row").should("exist");
        cy.get(".phases").should("exist");
        cy.get("#add-mushroom-btn").should("exist");
    })

    it('Add Mushroom - admin flow', () => {
        loginAsAdmin()
        addNewSpeciesPage.navigate();
        addNewSpeciesPage.addTestSpecies();
        logOut();
        loginAsKamil();
        mushroomsPage.navigate();
        mushroomsPage.checkIfTestMushroomIsPresent();
        logOut();
        loginAsAdmin();
        mushroomsPage.navigate();
        mushroomsPage.archiveTestMushroomAsAdmin();
        mushroomsPage.navigate();
        mushroomsPage.checkIfTestMushroomIsNotPresent();
    })

    it('Check fields exist', () => {
        loginAsKamil();
        addNewSpeciesPage.navigate();
        addNewSpeciesPage.checkTextFieldsExist();
        addNewSpeciesPage.checkSpawnRunFieldsExist();
        addNewSpeciesPage.checkPinningFieldsExist();
        addNewSpeciesPage.checkFruitingFieldsExist();
    })

})