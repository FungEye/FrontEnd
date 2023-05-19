import "./Recipes.css"
import "../../css/General.css"
import { useNavigate } from 'react-router-dom';

function RecipeCard(props) {

    let recipe = props.recipe;
    let difficulty = recipe.difficulty;
    let imgurl = recipe.imgurl;
    let recipeName = recipe.name;

    const navigate = useNavigate();


    function goToRecipe() {
        navigate(`/recipes/${recipe.id}`);
    }

    return(
        <div className="recipe-card bg-dark rounded-20 text-light">
            <div className="upper-half rounded-top-20">
                <img alt="Recipe Suggested Presentation" className="recipe-card-picture" src={imgurl}/>
            </div>
            <div className="bottom-half half column jc-center align-items-center poppins">
                <div className="recipe-name" onClick={() => goToRecipe()}>{recipeName}</div>
                <div className="recipe-difficulty-row row w-100 jc-center">
                    <div>Difficulty:</div>
                    <div data-test="difficulty-value"><b>{difficulty}</b></div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard