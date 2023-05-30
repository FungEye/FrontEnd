import { loginAsKamil } from "../util/loginFunctions"
import DashboardPage from "../pages/dashboard.page";
import YieldsPage from "../pages/yields.page";


describe('Dashboard Page Suite', () => {

    const dashboardPage = new DashboardPage();
    const yieldsPage = new YieldsPage();

    beforeEach(() => {
        loginAsKamil();
        dashboardPage.navigate();
    })

    it('Loads page', () => {
       dashboardPage.checkThatPageLoads();
    })

    it('Register a yield', () => {
        const randomNumber = (Math.random()*1000 + Math.random()*100 + Math.random()*10 + Math.random()*0.1).toFixed(2);
        console.log(randomNumber);
        const comment = "here is my random yield!";
        dashboardPage.registerYield(randomNumber, comment);
        yieldsPage.navigate();
        yieldsPage.lookForYield(randomNumber, comment);
    })

})