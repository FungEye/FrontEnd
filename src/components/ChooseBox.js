import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./css/ChooseBox.css";
import "./css/General.css";
import BoxCard from "./BoxCard";
import ButtonPrimary from "./ButtonPrimary";
import CreateBoxModal from "./CreateBoxModal";
import { useParams } from "react-router-dom";
import { useAuthUser, useAuthHeader } from "react-auth-kit";

function ChooseBox(props) {
  const navigate = useNavigate();
  const { mushroomId } = useParams();
  const containerRef = useRef(null);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const auth = useAuthUser();
  const authHeader = useAuthHeader();
  let boxList = props.boxList;
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth() + 1;
  const [selectedBoxId, setSelectedBoxId] = useState(null);
  //const lastBoxNumber = boxList.findLast((box) => box).boxNumber;

  const handleBoxSelect = (boxId) => {
    setSelectedBoxId(boxId);
  };

  const boxCards = boxList.map((item) => (
    <BoxCard key={item.boxNumber} box={item} onSelect={handleBoxSelect} />
  ));

  function handleClick(event) {
    navigate("/mushrooms");
  }

  function createGrow() {
    fetch("https://fungeye-383609.ey.r.appspot.com/grow", {
      method: "POST",
      headers: {
        Authorization: authHeader(),
        Accept: "application/json",
      },
      body: JSON.stringify({
        boxId: selectedBoxId,
        mushroomId: mushroomId,
        username: auth().name,
        date: {
          year: currentDate.getFullYear(),
          month: currentMonth,
          day: currentDate.getDate(),
        },
        developStage: "spawn run",
      }),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) return response.json();
      })
      .then((m) => {
        console.log(m.id);
      })
      .catch((err) => console.log(err.message));
  }

  function createGrowTEST() {
    fetch("https://fungeye-383609.ey.r.appspot.com/grow", {
      method: "POST",
      headers: {
        Authorization: authHeader(),
        Accept: "application/json",
      },
      body: JSON.stringify({
        boxId: 38,
        mushroomId: 1,
        username: "Kamil",
        date: {
          year: currentDate.getFullYear(),
          month: currentMonth,
          day: currentDate.getDate(),
        },
        developStage: "spawn run",
      }),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) return response.json();
      })
      .then((m) => {
        console.log(m.id);
        console.log("success");
      })
      .catch((err) => console.log(err.message));
  }

  function scrollLeft() {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: -600,
        behavior: "smooth",
      });
    }
  }

  // Scroll container to the right
  function scrollRight() {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: 600,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="choose-box-container">
      <p
        className="align-items-left text-light back-button"
        onClick={handleClick}
      >
        {"<"}
        Back
      </p>
      <button onClick={createGrowTEST()}>
        TEST THE {"CREATEGROW()"} FUNCTION
      </button>
      <div className="cont-box column varela bg-light rounded-20 column jc-center very-slightly-faded border-dark">
        <h1 className="poppins text-dark align-items-left">Box Selection</h1>
        <h3 className="varela text-dark align-items-left">Vacant boxes:</h3>
        <div className="box-cards-container ">
          <div className="scroll-arrow left-arrow" onClick={scrollLeft}>
            &lt;
          </div>
          <div className="box-cards" ref={containerRef}>
            {boxCards}
          </div>
          <div className="scroll-arrow right-arrow" onClick={scrollRight}>
            &gt;
          </div>
        </div>
        <div className="box-creation">
          <h1 className="poppins text-dark ">Set up a new box:</h1>
          <br></br>

          <ButtonPrimary text="NEW" onClick={() => setShow(true)} />

          <CreateBoxModal
            title="Boxes"
            onClose={() => setShow(false)}
            show={show}
            lastBoxNumber={props.lastBoxNumber}
            err={errorMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default ChooseBox;
