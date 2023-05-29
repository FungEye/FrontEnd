import "../css/General.css";
import "../css/BoxCard.css";
import boxPic from "../../img/box.png";
import ButtonPrimary from "../Buttons/ButtonPrimary";
//import { useNavigate } from "react-router-dom";
function BoxCard({ box, onSelect }) {
  //const navigate = useNavigate();
  const handleSelectClick = () => {
    onSelect(box.id);
  };

  return (
    <div className="box-card bg-light rounded-20 column jc-center slightly-faded">
      <div className="row jc-space-between w-100 mw-100 mc-top-row">
        <div
          className="ultra text-dark align-self-center bc-box-name"
          data-test="box-label"
        >
          BOX {box.id}
        </div>
        <img className="img-100px" src={boxPic} alt="box" />
      </div>
      <div className="row jc-space-evenly w-100">
        <ButtonPrimary
          text="PICK"
          //onClick={() => navigate(`/dashboard/${box.boxNumber}/new`)}
          onClick={handleSelectClick}
        />
      </div>
    </div>
  );
}

export default BoxCard;
