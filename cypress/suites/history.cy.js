import urls from "../util/data"
import { loginAsKamil } from "../util/loginFunctions"

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