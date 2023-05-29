import { loginAsAdmin, loginAsKamil } from "../util/loginFunctions";
import MushroomsPage from "../pages/mushrooms.page";
import { checkThatUrlContains } from "../util/urlChecker";

describe('Mushroom Page Suite', () => {

    const mushroomsPage = new MushroomsPage();

    beforeEach(() => {
        loginAsKamil();
        mushroomsPage.navigate();
    })

    it('Loads page', () => {
        mushroomsPage.checkThatPageLoads();
    })

    it('Check that DETAILS button opens the right mushroom modal.', () => {
        const name = "Enoki";
        const selector = mushroomsPage.getMushroomCardSelectorByName(name);
        mushroomsPage.checkMushroomNameInCard(selector, name);
        const selector2 = mushroomsPage.getMushroomCardSelectorByName(name);
        mushroomsPage.checkMushroomNameInModal(selector2, name);
    })

    it('Check that PICK button selects the right mushroom.', () => {
        const name = "Enoki";
        const selector = mushroomsPage.getMushroomCardSelectorByName(name);
        selector.invoke('attr', 'mushroom-id')
        .then((id) => {
            const selector2 = mushroomsPage.getMushroomCardSelectorByName(name);
            mushroomsPage.pickMushroom(selector2);
            checkThatUrlContains(`/boxes/${id}`);
        })
    })
});

describe.skip("SKIP: Test Mushroom Suite"), () => {
    it('Check for TestShroom', () => {
        loginAsKamil();
        mushroomsPage.navigate();
        mushroomsPage.checkIfTestMushroomIsPresent();
    })

    it('Archive Test Shroom', () => {
        loginAsAdmin();
        mushroomsPage.navigate();
        mushroomsPage.archiveTestMushroomAsAdmin();
    })

    it('Check if Test Shroom is not present', () => {
        loginAsKamil();
        mushroomsPage.navigate();
        mushroomsPage.checkIfTestMushroomIsNotPresent();
    })
}