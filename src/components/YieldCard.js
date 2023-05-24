import "./css/YieldCard.css";
import "./css/General.css";
import ButtonPrimary from "./ButtonPrimary";
import shroomPic from "../img/oyster.png";
import {getDateString} from "../util/DateTimeFormatter";

function YieldCard(props) {
  let myYield = props.myYield;
  let mushroomName = myYield.MushroomName;
  let comment = myYield.comment;
  let harvestDate = getDateString(myYield.harvestDate);
  let weight = myYield.weight;


  return (
    <div className="yield-card rounded-20 mt-15 ">
      <div className="yield-card-flex">
        <div className="yield-card-1st-column">
          <img className="img-100px" src={shroomPic} alt="shroom"></img>
          <ButtonPrimary text="history"></ButtonPrimary>
        </div>

        <div className="yield-card-2nd-column">
          <h2 className="ultra text-dark">{mushroomName}</h2>

          <p className="text-dark varela">
            {comment}
          </p>
        </div>

        <div className="yield-card-3rd-column">
          <h2 className="text-dark varela">Yield weight:</h2>
          <p className="text-dark varela">{weight} g</p>
          <p className="text-dark">Harvest Date: {harvestDate}</p>
          <ButtonPrimary text="recipes" />
        </div>
      </div>
    </div>
  );
}
export default YieldCard;
