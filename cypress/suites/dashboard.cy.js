import urls from "../util/data"
import { loginAsKamil } from "../util/loginFunctions"

describe('Dashboard Page Suite', () => {

    const dashboardPage = new DashboardPage();


    beforeEach(() => {
        loginAsKamil();
        dashboardPage.navigate();
    })

    it('Loads page', () => {
       dashboardPage.checkThatPageLoads();
    })

    it('Register a yield', () => {
       //TODO
    })

    
})