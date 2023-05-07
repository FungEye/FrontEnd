import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./css/ChooseBox.css";
import "./css/General.css";
import BoxCard from "./BoxCard";

function ChooseBox(props) {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  let boxList = props.boxList;

  console.log(boxList);
  const lastBoxNumber = boxList.findLast((box) => box).boxNumber;
  console.log(lastBoxNumber);
  const boxCards = boxList.map((item) => (
    <BoxCard box={item} lastBoxNumber={lastBoxNumber} key={item.boxNumber} />
  ));

  // Change the destination
  function handleClick(event) {
    navigate("/FrontEnd/chooseBox");
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
      <h1 className="poppins text-light align-items-left">Box Selection</h1>
      <h3 className="varela text-light align-items-left">Vacant boxes:</h3>
      <div className="box-cards-container">
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
    </div>
  );
}

export default ChooseBox;
