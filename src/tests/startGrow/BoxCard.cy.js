import React from "react";
import BoxCard from "../../components/BoxCard";
import { HashRouter } from "react-router-dom";
describe("<BoxCard />", () => {
  let item = { id: 1 };

  beforeEach(() => {
    cy.mount(
      <HashRouter>
        <BoxCard box={item} onSelect={handleBoxSelect} />
      </HashRouter>
    );
  });

  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.get(".box-card").should("exist");
  });

  it("Box label exists)", () => {
    cy.get('[data-test="box-label"]').should("exist");
  });

  it("Box label matches box id)", () => {
    cy.get('[data-test="box-label"]').contains("BOX 1");
  });

  it("Button is clickable", () => {
    cy.contains("PICK").click();
  });
});
