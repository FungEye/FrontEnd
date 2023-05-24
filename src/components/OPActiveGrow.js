import { useNavigate } from "react-router-dom";
import Status from "./Status";
import "./css/OverviewPage.css";
import "./css/General.css";
import { useState, useCallback } from "react";
import { getFullDateTimeString } from "../util/DateTimeFormatter";
import { useAuthHeader } from "react-auth-kit";
import { useEffect } from "react";

function OPActiveGrow(props) {
  let grow = props.grow;
  //TODO add the function to compare the measurements with the desired conditions
  let status = "Alarming";
  let lastMeasured = grow.id.dateTime;
  let lastMeasuredString = getFullDateTimeString(lastMeasured);
  let boxId = grow.id.boxId;
    const [box, setBox] = useState(null);
  const [mushroom, setMushroom] = useState(null);

  const navigate = useNavigate();
  const authHeader = useAuthHeader();

  const getBox = useCallback(() => {
    fetch(
      `https://fungeye-383609.ey.r.appspot.com/box${boxId}`,
      {
        method: "GET",
        headers: {
          Authorization: authHeader(),
        },
      }
    )
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((m) => {
        setBox(m);
        const mushroomId = m.grows[0].mushroomId;
        console.log("mushroom id" + mushroomId);
        return fetch(`https://fungeye-383609.ey.r.appspot.com/mushroom/${mushroomId}`
          ,
          {
            method: "GET",
            headers: {
              Authorization: authHeader(),
            },
          });
      })
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((m) => {
        console.log("MUSHROOM")
        console.log(m)
        setMushroom(m);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  
  useEffect(() => {
    getBox();
   }, [getBox]);
   

  function goToDashboard() {
    if (mushroom) {
      console.log(box);
      navigate(`/dashboard/${box.id}`);
    }
  }

  // TODO change the onClick from going to the general dashboard to
  // going to a dashboard that fetches depending on the grow id
  // When the dashboard actually fetches from a specific grow.
  // So it will be like "/grows/{growid}"

  return (
    <div
      onClick={() => goToDashboard()}
      className="op-grow row bg-light align-items-center rounded-20 very-slightly-faded border-dark varela pointer"
    >
      {!mushroom ? (
        <div className="column op-grow-loading">
          Grow is here. Loading info...
        </div>
      ) :
        <div className="op-info-row row align-items-center jc-center">
          <img className="op-icon" alt={"Mushroom"} src={mushroom.imageUrl}></img>
          <div className="column w-100 align-items-start">
            <div className="op-shroom-name ultra text-dark">{mushroom.name}</div>
            <div className="row op-info-row text-dark align-items-center">
              <div className="op-info">Status: </div>
              <Status status={status} mini={true} />
            </div>
            <div className="row op-info-row text-dark">
              <div className="op-info">Last Measured:</div>
              <div className="op-info-value">{lastMeasuredString}</div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default OPActiveGrow;
