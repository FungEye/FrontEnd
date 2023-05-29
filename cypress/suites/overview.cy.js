import urls from "../util/data"
import { loginAsKamil } from "../util/loginFunctions";

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
        cy.get(".op-grow").first().click();
        cy.url().should("include", "/dashboard");
    });

    it("Starting a new grow from an empty box", () => {
        cy.get("#your-boxes").click();
        cy.get("[data-test='Start Grow']").click();
        cy.url().should("include", "/mushrooms");
    });
})