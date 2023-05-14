describe('Overview PAGE test suite', () => {

  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
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

  it('Redirects to dashboard', () => {
    cy.get(".op-grow").first().click();
    cy.url().should('include', '/dashboard')
  })

  it('Starting a new grow', () => {
    cy.get("#your-boxes").click();
    cy.get("[data-test='Start Grow']").click();
    cy.url().should('include', '/mushrooms')
  })

})