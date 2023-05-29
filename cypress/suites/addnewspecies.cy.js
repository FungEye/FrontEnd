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
    it.only('Edit Mushroom name', () => {
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
        mushroomsPage.goToEditMushroom(mushroomName);
        const oldOrigin = addNewSpeciesPage.originInput.invoke('val');
        const newOrigin = "New Origin";
        addNewSpeciesPage.changeMushroomOrigin(newOrigin);
        const selectorWithNewName = mushroomsPage.getMushroomCardSelectorByName(newName);
        mushroomsPage.checkMushroomName(selectorWithNewName, newName);
        mushroomsPage.goToEditMushroom(newName);
        addNewSpeciesPage.changeMushroomName(oldName);
        const selectorWithOldName = mushroomsPage.getMushroomCardSelectorByName(oldName);
        mushroomsPage.checkMushroomName(selectorWithOldName, oldName);
    })

    it('Edit Mushroom description', () => {
        //TODO
    })

    it('Edit Mushroom image URL', () => {
        //TODO
    })

})

