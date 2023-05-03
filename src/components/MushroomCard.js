import "./css/General.css";
import "./css/MushroomCard.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";


function MushroomCard(props) {

    let mushroom = props.mushroom;
    let showDetails = props.showDetails;

    return (
        <div className="mushroom-card bg-light rounded-20 column jc-center slightly-faded">
            <div className="row jc-space-between w-100 mw-100 mc-top-row">
                <div className="ultra text-dark align-self-center mc-mushroom-name">{mushroom.shroomname}</div>
                <img className="img-100px" src={mushroom.imgsrc} alt="mushroom"/>
            </div>
            <div className="row jc-space-evenly w-100">
                <ButtonSecondary text="Details" onClick={showDetails}/>
                <ButtonPrimary text="Pick"/>
            </div>
        </div>
    )
}

export default MushroomCard;