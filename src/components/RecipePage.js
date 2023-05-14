import RecipeCard from './RecipeCard';
import './css/General.css'
import './css/Recipes.css'

function RecipePage(props) {
    let recipes = props.recipes;
    let recipeElements = recipes.map(x => <RecipeCard recipe={x} />)

    return (
        <div className="recipe-page column align-items-center">
            <div className="recipe-browse row gap-10">
                {recipeElements}
            </div>
        </div>
    )
}

export default RecipePage