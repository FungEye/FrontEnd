import RecipeCard from "./RecipeCard";
import "../../css/General.css";
import "./Recipes.css";
import DropdownMenu from "../../ui/DropdownMenu";

function RecipePage() {
  let recipeBrowse1 = {
    id: 1,
    name: "Garlic Mushroom",
    imgurl:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/garlic-pork-chops-in-creamy-mu-08b95d.jpg",
    difficulty: "Easy",
  };
  let recipeBrowse2 = {
    id: 2,
    name: "Garlic Mushroom",
    imgurl:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/garlic-pork-chops-in-creamy-mu-08b95d.jpg",
    difficulty: "Easy",
  };
  let recipeBrowse3 = {
    id: 3,
    name: "Garlic Mushroom",
    imgurl:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/garlic-pork-chops-in-creamy-mu-08b95d.jpg",
    difficulty: "Easy",
  };
  let recipeBrowse4 = {
    id: 4,
    name: "Garlic Mushroom",
    imgurl:
      "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/garlic-pork-chops-in-creamy-mu-08b95d.jpg",
    difficulty: "Easy",
  };

  let recipes = [recipeBrowse1, recipeBrowse2, recipeBrowse3, recipeBrowse4];
  let recipeElements = recipes.map((x) => <RecipeCard key={x.id} recipe={x} />);

  //TODO fetch all the mushrooms from backend and put them
  // in the Options object

  let mushrooms = ["Portobello", "Oyster", "Shiitake", "Enoki"];

  return (
    <div className="recipe-page bg-light rounded-20 column align-items-center m-auto">
      <div className="recipe-page-title ultra text-dark">Recipes</div>
      <div className="preferred-shroom-div">
        <div className="text-dark">Preferred Mushroom:</div>
        <DropdownMenu
          firstOption="Pick a Mushroom"
          id="mushroom-select"
          name="mushroom"
          options={mushrooms}
        />
      </div>

      <div className="recipe-browse row gap-10 jc-center">{recipeElements}</div>
    </div>
  );
}

export default RecipePage;
