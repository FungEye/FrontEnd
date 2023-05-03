import "./css/General.css";
import "./css/BoxCard.css";
import ButtonPrimary from "./ButtonPrimary";

function BoxCard(props) {
  let box = props.box;

  return (
    <div className="box-card bg-light rounded-20 column jc-center slightly-faded">
      <div className="row jc-space-between w-100 mw-100 mc-top-row">
        <div className="ultra text-dark align-self-center bc-box-name">
          BOX {box.boxnumber}
        </div>
        <img className="img-100px" src="./images/box.jpg" alt="box" />
      </div>
      <div className="row jc-space-evenly w-100">
        <ButtonPrimary text="PICK"></ButtonPrimary>
      </div>
    </div>
  );
}

export default BoxCard;
