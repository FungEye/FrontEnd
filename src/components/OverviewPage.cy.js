import React from 'react'
import OverviewPage from './OverviewPage'
import { HashRouter } from 'react-router-dom'

describe('<OverviewPage />', () => {

  function mountEmptyPage() {
    cy.mount(<HashRouter>
      <OverviewPage emptyGrows={true} emptyBoxes={true}/>
    </HashRouter>)
  }
  function mountPage() {
    cy.mount(<HashRouter>
      <OverviewPage/>
    </HashRouter>)
  }

  it('Overview Page Component: Renders', () => {  
    mountPage();
    cy.get('.op-container').should('exist');  
  })

  it('Active Grows should be visible when loading the page', () => {
    mountPage();
    cy.get('#active-grows').should('exist');  
    cy.get(".collapse-content").eq(0).should("not.have.css", "max-height", "0px")
  })

  it('Collapsible Functionality', () => {
    mountPage();
    cy.get("#your-boxes").click();
    cy.get(".collapse-content").eq(1).should("not.have.css", "max-height", "0px")
    cy.get("#your-boxes").click();
    cy.get(".collapse-content").eq(1).should("have.css", "max-height", "0px")
  })

  it('Empty Grows Collapsible', () => {
    mountEmptyPage();
    cy.get(".collapse-content").eq(0).should("contain", "You have no Active Grows yet!")
  })

  it('Empty Boxes Collapsible', () => {
    mountEmptyPage();
    cy.get("#your-boxes").click();
    cy.get(".collapse-content").eq(1).should("contain", "You have no Boxes yet!")
  })

  it('Overview Page Component: Check Yields', () => {
    mountPage();
    cy.get("#past-yields").click();
    cy.get(".inside-collapsible").last().should('contain', 'To see your yields, go to your Yields page.');
  })

})