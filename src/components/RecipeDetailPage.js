import "./css/Recipes.css"
import "./css/General.css"
// import { useParams } from "react-router-dom";

function RecipeDetailPage() {

    // TODO uncomment when it's relevant.
    // let { recipeId } = useParams();

    let recipe = {
        recipeName: "Flowered Mushrooms",
        imgurl: "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/sauteed-mushrooms-4.jpg",
        prepTimeMin: 60,
        cookTimeMin: 30,
        difficulty: "Easy",
        servings: 5,
        ingredients: [
            "5g of salsa",
            "100g of mushroom",
            "300g flour"
        ],
        steps: [
            "Shake your booty very very much",
            "Kiss the mushrooms tenderly",
            "Spread the flour on them"
        ]
    }

    let ingredientsOL = recipe.ingredients.map(x => <li key={x}>{x}</li>)
    let stepsOL = recipe.steps.map(x => <li key={x}>{x}</li>)


    return (
        <div className="recipe-detail-page column bg-light text-dark rounded-20 varela align-items-center very-slightly-faded">
            <div className="row">
                <img alt="Recipe Suggested Presentation" className="recipe-picture rounded-20" src={recipe.imgurl} />
                <div className="column recipe-info jc-center">
                    <div className="recipe-detail-title">
                        {recipe.recipeName}
                    </div>
                    <div className="row recipe-detail-info">
                        <div className="recipe-detail-field">Prep time: </div>
                        <div className="recipe-detail-value">{recipe.prepTimeMin} min.</div>
                    </div>
                    <div className="row recipe-detail-info">
                        <div className="recipe-detail-field">Cooking time: </div>
                        <div className="recipe-detail-value">{recipe.cookTimeMin} min.</div>
                    </div>
                    <div className="row recipe-detail-info">
                        <div className="recipe-detail-field">Difficulty: </div>
                        <div className="recipe-detail-value">{recipe.difficulty}</div>
                    </div>
                    <div className="row recipe-detail-info">
                        <div className="recipe-detail-field">Num. of Servings: </div>
                        <div className="recipe-detail-value">{recipe.servings}</div>
                    </div>
                </div>
            </div>
            <div className="recipe-details bg-dark w-100 row rounded-20 slightly-faded">
                <div className="recipe-specifics rounded-20 bg-light column very-slightly-faded">
                    <div className="recipe-detail-big align-self-center">Ingredients</div>
                    <ul>
                        {ingredientsOL}
                    </ul>
                </div>
                <div className="recipe-specifics rounded-20 bg-light column very-slightly-faded">
                    <div className="recipe-detail-big align-self-center">Steps</div>
                    <ol>
                        {stepsOL}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetailPage