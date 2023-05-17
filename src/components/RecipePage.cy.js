import React from 'react'
import RecipePage from './RecipePage'
import { HashRouter } from 'react-router-dom'

describe('<RecipePage />', () => {

  beforeEach(() => {
    cy.mount(
      <HashRouter>
        <RecipePage />
      </HashRouter>
    )
  })
  it('Recipe Page: Renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.get(".recipe-page").should('exist');

  })

  // TODO when the webpage actually fetches from the API,
  // make tests concerned with how fast the fetching should happen
  // aka fail if the recipe-cards are not there after like 5s.

  it('Recipe Page: Check Fields', () => {
    cy.get(".recipe-page-title").should('exist');
    cy.get(".preferred-shroom-div").should('exist');
    cy.get(".recipe-browse").should('exist');
    cy.get(".recipe-card").should('exist');
  })
})