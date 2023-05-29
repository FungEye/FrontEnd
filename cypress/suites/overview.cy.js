import urls from "../util/data"
import { loginAsKamil } from "../util/loginFunctions";
import { checkThatUrlContains } from "../util/urlChecker";

describe('Overview Page Suite', () => {

    const overviewPage = new OverviewPage();

    beforeEach(() => {
        loginAsKamil();
        overviewPage.navigate();
    })

    it('Loads page', () => {
        overviewPage.checkThatPageLoads();
    })

    it("Redirects to dashboard when clicking active grow", () => {
        overviewPage.growCards.first().click();
        checkThatUrlContains("/dashboard");
    });

    it("Starting a new grow from an empty box", () => {
        overviewPage.yourBoxesDiv.click();
        overviewPage.startAGrowButtons.first().click();
        checkThatUrlContains("/mushrooms");
    });
})