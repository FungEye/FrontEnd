import React from "react";
import RegisterLogin from "../../components/RegisterLogin";
import { HashRouter } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";

describe("<RegisterLogin />", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.mount(
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        <HashRouter basename="/">
          <RegisterLogin />
        </HashRouter>
      </AuthProvider>
    );
  });

  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        <HashRouter basename="/">
          <RegisterLogin />
        </HashRouter>
      </AuthProvider>
    );
  });

  it("has a title", () => {
    cy.get(".titleContainer").should("contain", "Login");
  });

  it("has a form", () => {
    cy.get("Input").should("exist");
  });
  it("has a button", () => {
    cy.get("Button").should("exist");
  });

  it("Register click, title contains Register", () => {
    cy.contains("Register").click();
    cy.get(".titleContainer").should("contain", "Register");
  });

  it("Back click, title contains Login", () => {
    cy.contains("Register").click();
    cy.contains("Back").click();
    cy.get(".titleContainer").should("contain", "Login");
  });

  it("Validation, correct", () => {
    cy.contains("Register").click();
    cy.get('[data-test="Username"]').type("test");
    cy.get('[data-test="Password"]').type("password");
    cy.get('[data-test="Confirm password"]').type("password");
    cy.contains("Register").click();
    cy.get("span").should("contain", "");
  });

  it("Validation, fields cannot be empty", () => {
    cy.contains("Register").click();
    cy.get('[data-test="Username"]').type("test");
    cy.get('[data-test="Register"]').click();
    cy.get("span").should("contain", "Fields cannot be empty.");
  });

  it("Validation, different passwords", () => {
    cy.contains("Register").click();
    cy.get('[data-test="Username"]').type("test");
    cy.get('[data-test="Password"]').type("password112");
    cy.get('[data-test="Confirm password"]').type("password");
    cy.get('[data-test="Register"]').click();
    cy.get("span").should("contain", "Passwords are not the same.");
  });

  it("Validation, password and username same", () => {
    cy.contains("Register").click();
    cy.get('[data-test="Username"]').type("test");
    cy.get('[data-test="Password"]').type("test");
    cy.get('[data-test="Confirm password"]').type("test");
    cy.get('[data-test="Register"]').click();
    cy.get("span").should("contain", "Password cannot include your username.");
  });
});
