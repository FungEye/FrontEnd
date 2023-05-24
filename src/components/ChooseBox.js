import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/ChooseBox.css";
import "./css/General.css";
import BoxCard from "./BoxCard";
import ButtonPrimary from "./ButtonPrimary";
import CreateBoxModal from "./CreateBoxModal";
import { useParams } from "react-router-dom";
import { useAuthUser, useAuthHeader } from "react-auth-kit";

function ChooseBox() {
  const navigate = useNavigate();
  const { mushroomId } = useParams();
  const containerRef = useRef(null);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [boxData, setBoxData] = useState([]);
  const auth = useAuthUser();
  const authHeader = useAuthHeader();
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth() + 1;
  let username = auth().name;

  //getting the empty boxes of a user
  useEffect(() => {
    setErrorMessage("");
    fetch(`https://fungeye-383609.ey.r.appspot.com/${username}/boxes/empty`, {
      method: "GET",
      headers: {
        Authorization: authHeader(),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.id - b.id);
        setBoxData(data);
      })
      .catch((error) => setErrorMessage(error.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  const handleBoxSelect = (boxId) => {
    createGrow(boxId);
  };
  //Creating box cards with empty boxes
  const boxCards = boxData.map((item) => (
    <BoxCard key={item.id} box={item} onSelect={handleBoxSelect} />
  ));

  function createGrow(boxId) {
    setErrorMessage("");
    fetch("https://fungeye-383609.ey.r.appspot.com/grow", {
      method: "POST",
      headers: {
        Authorization: authHeader(),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        boxId: parseInt(boxId),
        mushroomId: parseInt(mushroomId),
        username: username,
        date: {
          year: parseInt(currentDate.getFullYear()),
          month: parseInt(currentMonth),
          day: parseInt(currentDate.getDate()),
        },
        developStage: "spawn run",
      }),
    })
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((m) => {
        console.log(m.boxId);
        navigate(`/dashboard/${m.boxId}/new`);
      })
      .catch((err) => setErrorMessage(err.message));
  }

  function handleClick(event) {
    navigate("/mushrooms");
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
        {boxCards.length !== 0 ? (
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
        ) : errorMessage === "" ? (
          <p>Loading...</p>
        ) : (
          <p>An error occurred, read the message below.</p>
        )}
        <div className="box-creation">
          <h1 className="poppins text-dark ">Set up a new box:</h1>
          <br></br>

          <ButtonPrimary text="NEW" onClick={() => setShow(true)} />

          <CreateBoxModal
            title="Boxes"
            onClose={() => setShow(false)}
            show={show}
            onSelect={handleBoxSelect}
            err={errorMessage}
          />
        </div>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
}

export default ChooseBox;
