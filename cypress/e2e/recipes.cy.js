describe('Recipe Page Suite', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/#/login')
    cy.get("[data-test='Username']").type("lol");
    cy.get("[data-test='Password']").type("lalalala");
    cy.get("[data-test='Login']").click();
    cy.wait(1000);
    cy.visit('http://localhost:3000/#/recipes');
  })

  it('Loads page', () => {
    cy.get('.recipe-page').should('exist');
    cy.get('.recipe-page-title').should('exist');
    cy.get('.recipe-browse').should('exist');
    cy.get('#mushroom-select').should('exist');
    cy.get('.recipe-card').should('exist');
  })

  it('Redirects to the right recipe when clicking it', () => {
    cy.get(".recipe-name").first().click();
    cy.url().should('include', '/recipes/1');
    cy.visit("/#/recipes");
    cy.get(".recipe-name").eq(1).click();
    cy.url().should('include', '/recipes/2');
    cy.visit("/#/recipes");
    cy.get(".recipe-name").eq(2).click();
    cy.url().should('include', '/recipes/3');
    cy.visit("/#/recipes");
    cy.get(".recipe-name").eq(3).click();
    cy.url().should('include', '/recipes/4');
  })  
})

// TODO tc redirecting to recipes page from the History of a certain mushroom.
// Make sure that the specified mushroom is pre-selected in the dropdown menu of the recipes :)
// I am guessing this can be achieved through a param ... ?preferredShroom=Portobello
// when redirecting from the History page.

// TODO tc redirecting to recipe pages from the Yields page of a certain mushroom.
// Same as above :)