import './css/General.css'
import './css/Recipes.css'

function RecipeCard(props) {

    let recipe = props.recipe;
    let difficulty = recipe.difficulty;
    let imgurl = recipe.imgurl;
    let recipeName = recipe.name;

    return(
        <div className="recipe-card bg-light rounded-20 text-dark">
            <div className="upper-half bg-dark rounded-top-20">
                <img className="recipe-picture" src={imgurl}/>
            </div>
            <div className="bottom-half half column jc-center poppins">
                <div className="recipe-name">{recipeName}</div>
                <div className="recipe-difficulty-row row w-100 jc-center">
                    <div>Difficulty:</div>
                    <div><b>{difficulty}</b></div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard