function checkThatUrlContains(what) {
    cy.url().should("include", what);
}

export {checkThatUrlContains}