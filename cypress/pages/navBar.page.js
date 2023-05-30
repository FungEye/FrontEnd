
class NavBar {

    get navExpandButton() {
        return cy.get("#nav-expand-btn");
    }

    get navCloseButton() {
        return cy.get("#nav-close-btn");
    }

    get logOutButton() {
        return cy.get("#logout");
    }

    get logInButton() {
        return cy.get("#login");
    }

}

export default NavBar