import "./css/Dashboard.css";
import { useState, useEffect } from "react";
import { useAuthHeader } from "react-auth-kit";
import ButtonSecondary from "./ButtonSecondary";
import ButtonPrimary from "./ButtonPrimary";
import OneCondition from "./OneCondition";
import Status from "./Status";
import { getTimeString, getDateString } from "../util/DateTimeFormatter";
import { useParams } from "react-router-dom";
function Dashboard({ isNew }) {
  const { boxId } = useParams();
  const [measurement, setMeasurement] = useState(null);
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  const [toggleMessage, setToggleMessage] = useState("");
  // const [status, setStatus] = useState("Good");
  const [status] = useState("Good");
  const [shroomname] = useState("Oyster");
  // const [shroomname, setShroomName] = useState("Oyster");
  const [error, setError] = useState("");
  const authHeader = useAuthHeader();

  useEffect(() => {
    const fetchData = () => {
      setError("");
      fetch(
        `https://fungeye-383609.ey.r.appspot.com/box${boxId}/measurements/latest`,
        {
          method: "GET",
          headers: {
            Authorization: authHeader(),
          },
        }
      )
        .then((response) => {
          if (response.ok) return response.json();
          else if (response.status === 401)
            setError("You have to login first.");
        })
        .then((m) => {
          console.log(m);
          setMeasurement(m);
          setTime(getTimeString(m.id.dateTime));
          setDate(getDateString(m.id.dateTime));
        })
        .catch((err) => setError("Failed to fetch data."));
    };

    if (!isNew) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggle() {
    setError("");
    fetch(`https://fungeye-383609.ey.r.appspot.com/${boxId}/light`, {
      method: "POST",
      headers: {
        Authorization: authHeader(),
      },
    })
      .then((response) => {
        console.log(response);
        if (response.ok)
          setToggleMessage("Light in your box has been toggled.");
        else if (response.status === 401) setError("You have to login first.");
      })
      .catch((err) => setError("Failed to fetch data."));

    setTimeout(() => {
      setToggleMessage("");
    }, 5000);
  }

  return (
    <div className="cont column varela bg-light rounded-20 column jc-center very-slightly-faded border-dark">
      <div className="dashboard column align-items-center">
        <div className="mushroom-title text-dark ultra">{shroomname}</div>
        <div className="box text-dark w-100">Box #{boxId}</div>
        <div className="date text-dark">
          <b>{date}</b>
        </div>
        <div className="text-dark row jc-space-evenly align-items-center w-100 ">
          {!isNew ? (
            <div className="column pt-15">
              <ButtonSecondary text="<" />
              <div className="small-time">11:11</div>
            </div>
          ) : null}
          <div className="big-time p-10">
            <b>
              {isNew
                ? "No measurements yet, come back later"
                : time == null
                ? "Loading date..."
                : time}
            </b>
          </div>
          {!isNew ? (
            <div className="column pt-15">
              <ButtonSecondary text=">" />
              <div className="small-time">11:33</div>
            </div>
          ) : null}
        </div>
        {!isNew ? (
          <>
            <div className="status-text text-dark">
              <b>Status:</b>
            </div>
            <Status status={status} />
            <div className="toggle text-dark p-10">
              <ButtonPrimary text="Light" onClick={toggle} />
              <p className="poppins text-dark">{toggleMessage}</p>
            </div>

            <div className="measurements jc-center flex-wrap">
              <OneCondition
                title="Temperature"
                measurement={
                  measurement == null ? null : measurement.temperature
                }
                unit="ºC"
              />
              <OneCondition
                title="Humidity"
                measurement={measurement == null ? null : measurement.humidity}
                unit="%"
              />
              <OneCondition
                title="CO2"
                measurement={measurement == null ? null : measurement.co2}
                unit="ppm"
              />
              <OneCondition
                title="Light"
                measurement={measurement == null ? null : measurement.light}
                unit="lux"
              />
            </div>
          </>
        ) : null}
      </div>
      <p>{error}</p>
    </div>
  );
}
export default Dashboard;
