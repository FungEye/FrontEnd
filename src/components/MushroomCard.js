import "./css/General.css";
import "./css/MushroomCard.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";


function MushroomCard(props) {

    let mushroom = props.mushroom;

    return (
        <div className="mushroom-card bg-light rounded-20 column jc-center slightly-faded">
            <div className="row jc-space-between w-100 mw-100 mc-top-row">
                <div className="ultra text-dark align-self-center mc-mushroom-name">{mushroom.shroomname}</div>
                <img className="mushroom-card-image" src={mushroom.imgsrc} alt="mushroom"/>
            </div>
            <div className="row jc-space-evenly w-100">
                <ButtonSecondary text="Details"/>
                <ButtonPrimary text="Pick"/>
            </div>
        </div>
    )
}

export default MushroomCard;