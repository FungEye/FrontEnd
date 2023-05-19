import React from "react";
import OverviewBox from "../../components/OverviewBox";
import { HashRouter } from "react-router-dom";

describe("<OverviewBox />", () => {
  function mountEmptyBox(id) {
    cy.mount(
      <HashRouter>
        <OverviewBox boxId={id} />
      </HashRouter>
    );
  }

  function mountGrowingBox(id, shroomname) {
    cy.mount(
      <HashRouter>
        <OverviewBox boxId={id} shroomgrowing={shroomname} />
      </HashRouter>
    );
  }

  it("Overview Box: Empty Box Renders", () => {
    mountEmptyBox(1);
  });
  it("Overview Box: Empty Box - Check Fields", () => {
    mountEmptyBox(1);
    cy.get(".op-shroom-name").should("contain", "Box #1");
    cy.get(".op-info-value").should("contain", "Vacant");
    cy.get("[data-test='Start Grow']").should("exist");
    cy.get("[data-test='trash']").should("exist");
  });

  it("Overview Box: Growing Box Renders", () => {
    mountGrowingBox(2, "Oyster");
  });

  it("Overview Box: Growing Box - Check Fields", () => {
    mountGrowingBox(2, "Oyster");
    cy.get(".op-shroom-name").should("contain", "Box #2");
    cy.get(".op-info-value").should("contain", "Growing");
    cy.get(".op-info").should("contain", "Oyster");
  });
});
