import Collapsible from "./Collapsible";
import OPActiveGrow from "./OPActiveGrow";
import { useNavigate } from "react-router-dom";
import useScript from "../../hooks/useScript";
import OverviewBox from "./OverviewBox";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import { Link } from "react-router-dom";
import { useAuthUser, useAuthHeader } from "react-auth-kit";
import { useEffect, useState, useCallback } from "react";
import { setErrMsg, errorMessages } from "../../util/ErrorMessages";
import ErrorModal from "../Modals/ErrorModal";

function OverviewPage(props) {
  useScript(`
      var coll = document.getElementsByClassName("collapse-container");
    var i;

    for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
        let scrollheight = content.scrollHeight + 40;
      content.style.maxHeight = scrollheight + "px";
    } 
  });
  
  document.getElementById("active-grows").click();

}`);

  const auth = useAuthUser();
  const authHeader = useAuthHeader();
  const username = auth().name;
  const [grows, setGrows] = useState(null);
  const [boxes, setBoxes] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);

  //TODO fix this... get the grows for a user instead
  // and then get each grow by grow id
  // and inside each grow, also each mushroom
  // to give it the mushroom name and image url
  // Yikes!
  const getLatestMeasurements = useCallback(() => {
    fetch(
      `https://fungeye-383609.ey.r.appspot.com/${username}/measurements/latest`,
      {
        method: "GET",
        headers: {
          Authorization: authHeader(),
        },
      }
    )
      .then((response) => {
        if (response.ok) return response.json();
        else {
          setErrMsg(setErrorMessage, response.status);
          setShowErrorModal(true);
        }
      })
      .then((m) => {
        if (m === []) {
          setGrows({ noGrows: true });
        } else {
          console.log(m);
          setGrows(m);
        }
      })
      .catch((err) => {
        setErrorMessage(errorMessages.errBefore);
        setShowErrorModal(true);
      });
    // eslint-disable-next-line
  }, [username]);

  const getBoxes = useCallback(() => {
    fetch(`https://fungeye-383609.ey.r.appspot.com/${username}/boxes`, {
      method: "GET",
      headers: {
        Authorization: authHeader(),
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        else {
          setErrMsg(setErrorMessage, response.status);
          setShowErrorModal(true);
        }
      })
      .then((m) => {
        setBoxes(m);
      })
      .catch((err) => {
        setErrorMessage(errorMessages.errBefore);
        setShowErrorModal(true);
      });
    // eslint-disable-next-line
  }, [username]);

  useEffect(() => {
    getLatestMeasurements();
    getBoxes();
  }, [getLatestMeasurements, getBoxes]);

  //TODO add functionality for setting up a box when Robert has fixed his modal
  // const setUpBox = () => {};

  const navigate = useNavigate();

  const goToMushrooms = () => {
    navigate("/mushrooms");
  };

  let growList;

  if (!grows) {
    growList = <div className="op-grow-loading">Loading...</div>;
  } else {
    document.getElementById("active-grows").click();
    document.getElementById("active-grows").click();
    if (grows.noGrows) {
      growList = (
        <div className="column align-items-center gap-10">
          <div className="op-info-value"> You have no Active Grows yet!</div>
          <ButtonPrimary text="Start Grow" onClick={() => goToMushrooms()} />
        </div>
      );
    } else {
      document.getElementById("active-grows").click();
      document.getElementById("active-grows").click();
      growList = grows.map((x) => <OPActiveGrow grow={x} />);
    }
  }

  let boxList;

  if (!boxes) {
    boxList = <div className="op-grow-loading">Loading...</div>;
  } else {
    if (boxes.noBoxes) {
      boxList = (
        <div className="column align-items-center gap-10">
          <div className="op-info-value"> You have no Boxes yet!</div>
          <ButtonPrimary text="Set Up Box" />
        </div>
      );
    } else {
      document.getElementById("your-boxes").click();
      document.getElementById("your-boxes").click();
      boxList = boxes.map((x) => <OverviewBox box={x} />);
    }
  }
  let collapsibleWidth = 450;

  return (
    <div className="op-container maxw-95 bg-light rounded-20 column align-items-center very-slightly-faded">
      <div className="op-title ultra text-dark">Overview</div>
      <Collapsible
        id="active-grows"
        width={collapsibleWidth}
        text="Active Grows"
        content={
          <div id="op-active-grows" className="column">
            {growList}
          </div>
        }
      />
      <Collapsible
        id="your-boxes"
        width={collapsibleWidth}
        text="Your Boxes"
        content={
          <div className="op-free-boxes column inside-collapsible">
            {boxList}
          </div>
        }
      />
      <Collapsible
        id="past-yields"
        width={collapsibleWidth}
        text="Past Yields"
        content={
          <div className="inside-collapsible">
            To see your yields, go to your{" "}
            <Link className="yieldsLink text-dark" to="/yields">
              Yields
            </Link>{" "}
            page.
          </div>
        }
      />
      <ErrorModal
        show={showErrorModal}
        setShow={setShowErrorModal}
        message={errorMessage}
      />
    </div>
  );
}

export default OverviewPage;
