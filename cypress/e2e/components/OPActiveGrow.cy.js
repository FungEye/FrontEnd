import React from 'react'
import OPActiveGrow from './OPActiveGrow'
import { HashRouter, Router } from 'react-router-dom'

describe('<OPActiveGrow />', () => {

  let grow1 = {
    status: "Good",
    mushroom: {
      shroomname: "Oyster",
      imgurl: "https://cdn-icons-png.flaticon.com/512/2069/2069395.png",
    },
    lastMeasured: {
      day: 11,
      month: 5,
      year: 2023,
      hour: 9,
      minute: 30
    }
  }

  beforeEach(() => {
    cy.mount(<HashRouter>
      <OPActiveGrow grow={grow1} />
    </HashRouter>)
  })



  it('Active Grow: Renders', () => {
    cy.get(".op-grow").should('exist');
  })

  it ('Active Grow: Check fields', () => {
    cy.get(".op-shroom-name").should('contain', 'Oyster');
    cy.get(".mini-status").should('contain', 'Good');
    cy.get(".op-info-value").should('contain', '11/05/2023 - 9:30');
  })

})