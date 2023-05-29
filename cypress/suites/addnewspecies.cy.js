import { logOut, loginAsAdmin, loginAsKamil } from "../util/loginFunctions";
import MushroomsPage from "../pages/mushrooms.page";
import AddNewSpeciesPage from "../pages/addNewSpecies.page";

describe('Add New Species Page Suite', () => {

    const addNewSpeciesPage = new AddNewSpeciesPage();
    const mushroomsPage = new MushroomsPage();

    it('Loads page', () => {
        loginAsKamil();
        addNewSpeciesPage.navigate();
        addNewSpeciesPage.checkThatPageLoads();
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

describe('Edit Species Suite', () => {
    const mushroomsPage = new MushroomsPage();
    const addNewSpeciesPage = new AddNewSpeciesPage();
    it('Edit Mushroom name', () => {
        loginAsAdmin();
        mushroomsPage.navigate();
        const oldName = "King Oyster";
        const newName = "New Name";
        mushroomsPage.goToEditMushroom(oldName);
        addNewSpeciesPage.changeMushroomName(newName);
        const selectorWithNewName = mushroomsPage.getMushroomCardSelectorByName(newName);
        mushroomsPage.checkMushroomName(selectorWithNewName, newName);
        mushroomsPage.goToEditMushroom(newName);
        addNewSpeciesPage.changeMushroomName(oldName);
        const selectorWithOldName = mushroomsPage.getMushroomCardSelectorByName(oldName);
        mushroomsPage.checkMushroomName(selectorWithOldName, oldName);
    })

    it('Edit Mushroom origin', () => {
        loginAsAdmin();
        mushroomsPage.navigate();
        const mushroomName = "King Oyster";
        let mushroomSelector = mushroomsPage.getMushroomCardSelectorByName(mushroomName);
        mushroomsPage.openMushroomDetails(mushroomSelector);
        mushroomsPage.originValue.then(($span) => {
            const origin = $span.text();

            mushroomsPage.closeDetailsModal();
            mushroomsPage.goToEditMushroom(mushroomName);
            const newOrigin = "New Origin";
            addNewSpeciesPage.changeMushroomOrigin(newOrigin);
            let selector2 = mushroomsPage.getMushroomCardSelectorByName(mushroomName);
            mushroomsPage.checkMushroomOrigin(selector2, newOrigin);
            mushroomsPage.closeDetailsModal();
            mushroomsPage.goToEditMushroom(mushroomName);
            addNewSpeciesPage.changeMushroomOrigin(origin);
            let selector3 = mushroomsPage.getMushroomCardSelectorByName(mushroomName);
            mushroomsPage.checkMushroomOrigin(selector3, origin);
        })
    })

    it('Edit Mushroom description', () => {
        loginAsAdmin();
        mushroomsPage.navigate();
        const mushroomName = "King Oyster";
        let mushroomSelector = mushroomsPage.getMushroomCardSelectorByName(mushroomName);
        mushroomsPage.openMushroomDetails(mushroomSelector);
        mushroomsPage.descriptionValue.then(($span) => {
            const description = $span.text();

            mushroomsPage.closeDetailsModal();
            mushroomsPage.goToEditMushroom(mushroomName);
            const newDescription = "New Description lalala";
            addNewSpeciesPage.changeMushroomDescription(newDescription);
            let selector2 = mushroomsPage.getMushroomCardSelectorByName(mushroomName);
            mushroomsPage.checkMushroomDescription(selector2, newDescription);
            mushroomsPage.closeDetailsModal();
            mushroomsPage.goToEditMushroom(mushroomName);
            addNewSpeciesPage.changeMushroomDescription(description);
            let selector3 = mushroomsPage.getMushroomCardSelectorByName(mushroomName);
            mushroomsPage.checkMushroomDescription(selector3, description);
        })
    })

    it.skip('Edit Mushroom image URL', () => {
        //TODO
    })

})

