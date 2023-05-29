import "./css/YieldCard.css";
import "./css/General.css";
import { getDateString } from "../../util/DateTimeFormatter";
import { useNavigate } from "react-router-dom";

function YieldCard(props) {
  let myYield = props.myYield;
  // let growId = props.id;
  let mushroomName = myYield.mushroomName;
  let comment = myYield.comment;
  let harvestDate = getDateString(myYield.harvestDate);
  let weight = myYield.weight;
  let imgUrl = myYield.imageUrl;

  const navigate = useNavigate();

  function goToHistory() {
    navigate(`/history/1`);
  }

  return (
    <div className="yield-card maxw-95 flex-wrap bg-light border-dark rounded-20 mt-15 row align-items-center">
      <div className="icon-and-history column yield-col">
        <img className="op-icon" src={imgUrl} alt="mushroom" />
        <div
          onClick={() => {
            goToHistory();
          }}
          className="yields-history-link"
        >
          history
        </div>
      </div>
      <div className="column yield-col yield-info">
        <div className="yield-mushroom-name ultra">{mushroomName}</div>
        <div className="yield-harvest-date">
          <b>Harvested on {harvestDate}</b>
        </div>
        <div className="yield-comment varela">{comment}</div>
      </div>
      <div className="column yield-col yield-value">
        <div className="yield-grams-value">{weight}</div>
        <div className="yield-grams-label">grams</div>
      </div>
      {/* <div className="yield-card-flex">
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
      </div> */}
    </div>
  );
}
export default YieldCard;
