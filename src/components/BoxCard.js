import "./css/General.css";
import "./css/BoxCard.css";
import boxPic from "../img/box.png";
import ButtonPrimary from "./ButtonPrimary";
import ChooseBoxModal from "./ChooseBoxModal";
import { useState } from "react";

function BoxCard(props) {
  let box = props.box;
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  function createNewBox() {
    fetch("https://fungeye-383609.ey.r.appspot.com/boxx", {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((m) => {
        console.log(m.id);
      })
      .catch((err) => setErrorMessage(err.message));
  }

  return (
    <div className="box-card bg-light rounded-20 column jc-center slightly-faded">
      <div className="row jc-space-between w-100 mw-100 mc-top-row">
        <div className="ultra text-dark align-self-center bc-box-name">
          BOX {box.boxNumber}
        </div>
        <img className="img-100px" src={boxPic} alt="box" />
      </div>
      <div className="row jc-space-evenly w-100">
        <ButtonPrimary text="PICK" onClick={() => setShow(true)} />
        <ChooseBoxModal
          title="Boxes"
          onClose={() => setShow(false)}
          show={show}
          onSubmit={createNewBox}
          lastBoxNumber={props.lastBoxNumber}
          err={errorMessage}
        />
      </div>
    </div>
  );
}

export default BoxCard;
