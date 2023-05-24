import React from "react";
import ChooseBox from "../../components/ChooseBox";
import { HashRouter } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";

describe("<ChooseBox />", () => {
  beforeEach(() => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        <HashRouter basename="/">
          <ChooseBox />
        </HashRouter>
      </AuthProvider>
    );
  });

  it(" Renders", () => {
    cy.get("choose-box-container").should("exist");
  });
});
