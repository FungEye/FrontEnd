import urls from "../util/data"
import { loginAsKamil } from "../util/loginFunctions"

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