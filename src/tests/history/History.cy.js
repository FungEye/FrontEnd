import React from "react";
import History from "../history";

describe("<History />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<History />);
  });
});
