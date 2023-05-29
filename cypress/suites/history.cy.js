import urls from "../util/data"
import { loginAsKamil } from "../util/loginFunctions"

describe('History Page Suite', () => {


    beforeEach(() => {
       loginAsKamil();
    })

    it('Loads page', () => {
        cy.get(".historyPageContainer").should("exist");
        cy.get(".historyContainer").should("exist");
        cy.get(".titleContainer").should("exist");
        cy.get(".content-container").should("exist");
        cy.get(".left-container").should("exist");
        cy.get(".right-container").should("exist");
        cy.get(".toggleContainer").should("exist");
        cy.get(".conditions-carousel-history").should("exist");
    })
})