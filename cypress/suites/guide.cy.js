import urls from "../util/data"
import { loginAsKamil } from "../util/loginFunctions"
import GuidePage from "../pages/guide.page";

describe('Guide Page Suite', () => {

    const guidePage = new GuidePage();

    beforeEach(() => {
       loginAsKamil();
       guidePage.navigate();
    })

    it('Loads page', () => {
        guidePage.checkThatPageLoads();
    })

})