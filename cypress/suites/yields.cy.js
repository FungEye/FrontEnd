import { loginAsKamil } from "../util/loginFunctions"
import { checkThatUrlContains } from "../util/urlChecker";
import YieldsPage from "../pages/yields.page";

describe('Yields Page Suite', () => {

    const yieldsPage = new YieldsPage();

    beforeEach(() => {
        loginAsKamil();
        yieldsPage.navigate();
    })

    it('Loads page', () => {
       yieldsPage.checkThatPageLoads();
    })

    it('Navigate to History from first mushroom card', () => {
        yieldsPage.goToHistoryFromFirstMushroom();
        checkThatUrlContains("/history");
    })
})