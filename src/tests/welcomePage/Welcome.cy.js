import React from "react";
import Welcome from "../../components/Welcome";
import { HashRouter } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";

beforeEach(() => {
  cy.mount(
    <AuthProvider>
      <HashRouter>
        <Welcome />
      </HashRouter>
    </AuthProvider>
  );
});

it("displays the welcome message", () => {
  cy.contains("Welcome to FungEye").should("exist");
});

it("displays the motto", () => {
  cy.contains("Empowering you to grow mushrooms like a pro.").should("exist");
});

it("renders the button with the correct text", () => {
  cy.get("button").should("contain", "Log in/Register");
});
