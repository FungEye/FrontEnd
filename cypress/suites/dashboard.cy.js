import urls from "../util/data"
import { loginAsKamil } from "../util/loginFunctions"

describe('Dashboard Page Suite', () => {

    const dashboardPage = new DashboardPage();


    beforeEach(() => {
        loginAsKamil();
        dashboardPage.navigate();
    })

    it('Loads page', () => {
        cy.get(".cont").should("exist");
        cy.get(".dashboard").should("exist");
        cy.get(".mushroom-title").should("exist");
        cy.get(".status-row").should("exist");
        cy.get(".measurements").should("exist");
        cy.get(".dashboard-register-yields").should("exist");
    })
})