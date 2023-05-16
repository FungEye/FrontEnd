describe('Overview PAGE test suite', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/#/login')
    cy.get("[data-test='Username']").type("lol");
    cy.get("[data-test='Password']").type("lalalala");
    cy.get("[data-test='Login']").click();
    cy.wait(1000);
    cy.visit('http://localhost:3000/#/overview');
  })

  it('Loads page', () => {
    cy.get('.op-container').should('exist');
    cy.get('#active-grows').should('exist');
    cy.get('#your-boxes').should('exist');
    cy.get('#past-yields').should('exist');
  })

  it('Redirects to dashboard when clicking active grow', () => {
    cy.get(".op-grow").first().click();
    cy.url().should('include', '/dashboard')
  })

  it('Starting a new grow from an empty box', () => {
    cy.get("#your-boxes").click();
    cy.get("[data-test='Start Grow']").click();
    cy.url().should('include', '/mushrooms')
  })

  // TODO failing because, in End to End testing, I cannot decide
  // to make the Active Grows empty because that would imply heavily changing the code.
  // When our system is more solid, we can just make a test user
  // that has no active grows, and then log into his account
  // for this test case.
  // Otherwise, log into the account of another Test User
  // which has grows in his account.
  it('Starting a new grow from Empty Active Grows button', () => {
    cy.get("[data-test='Start Grow']").click();
    cy.url().should('include', '/mushrooms')
  })

})