import React from "react";
import RecipeCard from "../../components/RecipeCard";
import { HashRouter } from "react-router-dom";

describe("<RecipeCard />", () => {
  let recipeBrowse1 = {
    id: 1,
    name: "Garlic Mushroom",
    imgurl:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/garlic-pork-chops-in-creamy-mu-08b95d.jpg",
    difficulty: "Easy",
  };

  beforeEach(() => {
    cy.mount(
      <HashRouter>
        <RecipeCard recipe={recipeBrowse1} />
      </HashRouter>
    );
  });

  it("Recipe Card: Renders", () => {
    cy.get(".recipe-card").should("exist");
  });

  it("Recipe Card: Check fields", () => {
    cy.get(".recipe-name").should("contain", "Garlic Mushroom");
    cy.get(".recipe-difficulty-row div").eq(0).should("contain", "Difficulty:");
    cy.get("[data-test='difficulty-value']").should("contain", "Easy");
  });
});
