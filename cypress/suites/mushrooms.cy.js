import urls from "../util/data"
import { loginAsAdmin, loginAsKamil } from "../util/loginFunctions";
import MushroomsPage from "../pages/mushrooms.page";

describe('Mushroom Page Suite', () => {

    const mushroomsPage = new MushroomsPage();

    it('Loads page', () => {
        loginAsKamil();
        mushroomsPage.navigate();
        mushroomsPage.checkThatPageLoads();
    })

    it.skip('Check for TestShroom', () => {
        loginAsKamil();
        mushroomsPage.navigate();
        mushroomsPage.checkIfTestMushroomIsPresent();
    })

    it.skip('Archive Test Shroom', () => {
        loginAsAdmin();
        mushroomsPage.navigate();
        mushroomsPage.archiveTestMushroomAsAdmin();
    })

    it.skip('Check if Test Shroom is not present', () => {
        loginAsKamil();
        mushroomsPage.navigate();
        mushroomsPage.checkIfTestMushroomIsNotPresent();
    })

})