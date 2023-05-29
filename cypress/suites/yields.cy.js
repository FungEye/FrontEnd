import urls from "../util/data"
import { loginAsKamil } from "../util/loginFunctions"

describe('Yields Page Suite', () => {

    const yieldsPage = new YieldsPage();

    beforeEach(() => {
        loginAsKamil();
        yieldsPage.navigate();
    })

    it('Loads page', () => {
       yieldsPage.checkThatPageLoads();
    })
})