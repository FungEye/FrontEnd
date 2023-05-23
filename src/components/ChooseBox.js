import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/ChooseBox.css";
import "./css/General.css";
import BoxCard from "./BoxCard";
import ButtonPrimary from "./ButtonPrimary";
import CreateBoxModal from "./CreateBoxModal";
import { useParams } from "react-router-dom";
import { useAuthHeader, useIsAuthenticated, useAuthUser } from "react-auth-kit";

function ChooseBox(props) {
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  let boxList = props.boxList;
  const [fetchedBoxList, setBoxList] = useState(null);
  const authHeader = useAuthHeader();
  const auth = useAuthUser();
  const authenticated = useIsAuthenticated();

  console.log(boxList);
  const lastBoxNumber = boxList.findLast((box) => box).boxNumber;
  console.log(lastBoxNumber);
  const boxCards = boxList.map((item) => (
    <BoxCard box={item} lastBoxNumber={lastBoxNumber} key={item.boxNumber} />
  ));

  // Change the destination
  function handleClick(event) {
    navigate("/");
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

  function scrollRight() {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: 600,
        behavior: "smooth",
      });
    }
  }
  //navbar.js line 61 for getting the username
  // use the crazy quotation marks ` , for variables dollars
  const fetchEmptyBoxes = useCallback(() => {
    fetch(
      `https://fungeye-383609.ey.r.appspot.com/Kamil/boxes/empty`, //${auth().name}
      {
        method: "GET",
        headers: {
          Authorization: authHeader(),
        },
      }
    )
      .then((response) => {
        console.log("RESPONSE", response);
        if (response.ok) return response.json();
      })
      .then((b) => {
        console.log(b);
        setBoxList(b);
      })
      .catch((err) => console.log(err));
  }, [authHeader, auth]);

  useEffect(() => {
    if (authenticated) fetchEmptyBoxes();
  }, [authHeader, fetchEmptyBoxes, authenticated]);

  function createNewBox() {
    fetch(`https://fungeye-383609.ey.r.appspot.com/box`, {
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
    <div className="choose-box-container">
      <p
        className="align-items-left text-light back-button"
        onClick={handleClick}
      >
        {"<"}
        Back
      </p>
      <div className="cont-box column varela bg-light rounded-20 column jc-center very-slightly-faded border-dark">
        <h1 className="poppins text-dark align-items-left">Box Selection</h1>
        <h3 className="varela text-dark align-items-left">Vacant boxes:</h3>
        <button onClick={fetchEmptyBoxes}> FEEEEEETCH pls </button>
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
            onSubmit={createNewBox}
            lastBoxNumber={props.lastBoxNumber}
            err={errorMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default ChooseBox;
