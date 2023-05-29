import NavBar from "../pages/navBar.page";
import LoginPage from "../pages/login.page";

const navBar = new NavBar();
const loginPage = new LoginPage();

function loginAsKamil() {
    cy.visit(`/login`)
    cy.get("[data-test='Username']").type("Kamil");
    cy.get("[data-test='Password']").type("qazwsx");
    cy.get("[data-test='Login']").click();
    cy.wait(2000);
}

function loginAsAdmin() {
    cy.visit(`/login`);
    cy.get("[data-test='Username']").type("admin");
    cy.get("[data-test='Password']").type("password");
    cy.get("[data-test='Login']").click();
    cy.wait(2000);
}

function logOut() {
    if (navBar.navExpandButton) {
        navBar.navExpandButton.click();
    }
    navBar.logOutButton.click();
}

export {loginAsKamil, loginAsAdmin, logOut}