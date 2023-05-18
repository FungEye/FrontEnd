import React from 'react'
import RecipeDetailPage from '../../components/RecipeDetailPage'
import { HashRouter } from 'react-router-dom'

describe('<RecipeDetailPage />', () => {

    // TODO figure out how to mount when the detail page is using
    // the param from the url... I'm sure there's a way to mount it
    // by passing a param to it without having a url. I hope...
  beforeEach(() => {
    cy.mount(
        <RecipeDetailPage />
    )
  })
  it('Recipe Detail Page: Renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.get(".recipe-detail-page").should('exist');

  })

  // TODO when the webpage actually fetches from the API,
  // make tests concerned with how fast the fetching should happen
  // aka fail if the recipe-cards are not there after like 5s.

  // TODO yeah, make this check for the fields of the mushroom
  // that will be get from the API when that is in order.

  it('Recipe Detail Page: Check Fields', () => {
    cy.get(".recipe-detail-title").should('contain', 'Flowered Mushrooms');
    cy.get("[data-test='prep-time'].recipe-detail-value").should('contain', '60 min.');
    cy.get("[data-test='cook-time'].recipe-detail-value").should('contain', '30 min.');
    cy.get("[data-test='difficulty'].recipe-detail-value").should('contain', 'Easy');
    cy.get("[data-test='num-servings'].recipe-detail-value").should('contain', '5');

    //idek how to do this
    // cy.get("#ingredients").should
  })
})