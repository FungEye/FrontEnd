import "./css/General.css";
import "./css/MushroomCard.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { useNavigate } from "react-router-dom";

function MushroomCard(props) {
  let mushroom = props.mushroom;
  let shroomname = mushroom.name;
  let imgsrc = mushroom.imageUrl;
  let id = mushroom.id;
  let showDetails = props.showDetails;
  const navigate = useNavigate();

  return (
    <div className="mushroom-card bg-light rounded-20 column jc-center slightly-faded">
      <div className="row w-100 mw-100 mc-top-row">
        <div className="ultra text-dark align-self-center mc-mushroom-name w-75">
          {shroomname}
        </div>
        <img className="mc-img rounded-20 end" src={imgsrc} alt="mushroom" />
      </div>
      <div className="row jc-space-evenly w-100">
        <ButtonSecondary text="Details" onClick={showDetails} />
        <ButtonPrimary
          text="Pick"
          onClick={() => navigate(`/boxes/${id}`)}
        />
      </div>
    </div>
  );
}

export default MushroomCard;
