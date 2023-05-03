import { useNavigate } from "react-router-dom";
import "./css/ChooseBox.css";
import { useState } from "react";
import BoxCard from "./BoxCard";
import ChooseBoxModal from "./ChooseBoxModal";

function ChooseBox(props) {
  const navigate = useNavigate();
  let boxList = props.boxList;
  const [show, setShow] = useState(false);

  const [box, setBox] = useState(null);
  console.log(boxList);
  const boxCards = boxList.map((x) => (
    <BoxCard
      box={x}
      showDetails={() => {
        setBox(x);
        setShow(true);
      }}
      key={x.boxnumber}
    />
  ));

  //Change the destination
  function handleClick(event) {
    navigate("/FrontEnd/chooseBox");
  }
  function chosenFunction() {}

  return (
    <div className="choose-box-page">
      <p className="back-button" onClick={handleClick}>
        {"<"}
        Back
      </p>
      <h2 className="title">Box Selection</h2>
      <br></br>
      <h4>Vacant boxes:</h4>

      <div className="box-cards">
        {boxCards}
        <button onClick={() => setShow(true)}>Show Modal</button>
        <ChooseBoxModal
          title="Boxes blabla"
          onClose={() => setShow(false)}
          show={show}
          onSubmit={chosenFunction()}
        >
          <p> This is box box box</p>
        </ChooseBoxModal>
      </div>
    </div>
  );
}

export default ChooseBox;
