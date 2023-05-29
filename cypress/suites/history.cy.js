import urls from "../util/data"
import { loginAsKamil } from "../util/loginFunctions"
import HistoryPage from "../pages/history.page";

describe('History Page Suite', () => {

    const historyPage = new HistoryPage();

    beforeEach(() => {
       loginAsKamil();
       historyPage.navigate();
    })

    it('Loads page', () => {
        historyPage.checkThatPageLoads();
    })

    it('Check toggle between graph and table', () => {
       //TODO
    })
})