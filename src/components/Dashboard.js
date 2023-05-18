import "./css/Dashboard.css";
import { useState, useEffect, useCallback } from "react";
import { useAuthHeader } from "react-auth-kit";
import ButtonSecondary from "./ButtonSecondary";
import OneCondition from "./OneCondition";
import Status from "./Status";
import { getTimeString, getDateString } from "../util/DateTimeFormatter";
function Dashboard() {
  const [measurement, setMeasurement] = useState(null);
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  // const [status, setStatus] = useState("Good");
  const [status] = useState("Good");
  const [shroomname] = useState("Oyster");
  // const [shroomname, setShroomName] = useState("Oyster");
  const [error, setError] = useState("");
  const authHeader = useAuthHeader();

  const fetchData = useCallback(() => {
    console.log(authHeader());
    const authFullText = authHeader();
    const authDesiredText = authFullText.split(" ")[1];
    console.log(authDesiredText);
    fetch(`https://fungeye-383609.ey.r.appspot.com/box1/measurements/latest`, {
      method: "GET",
      headers: {
        Authorization: authHeader(),
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((m) => {
        setMeasurement(m);
        // setTimestamp(initTimestampString(m.id.dateTime));
        setTime(getTimeString(m.id.dateTime));
        setDate(getDateString(m.id.dateTime));
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, [authHeader]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="cont column varela bg-light rounded-20 column jc-center very-slightly-faded border-dark">
      <div className="dashboard column align-items-center">
        <div className="mushroom-title text-dark ultra">
          {shroomname} Mushroom
        </div>
        <div className="box text-dark w-100">
          Box # {measurement == null ? -1 : measurement.id.boxId}
        </div>
        <div className="date text-dark">
          <b>{date}</b>
        </div>
        <div className="text-dark row jc-space-evenly align-items-center w-100 ">
          <div className="column pt-15">
            <ButtonSecondary text="<" />
            <div className="small-time">11:11</div>
          </div>
          <div className="big-time">
            <b>{time == null ? "Loading date..." : time}</b>
          </div>
          <div className="column pt-15">
            <ButtonSecondary text=">" />
            <div className="small-time">11:33</div>
          </div>
        </div>
        <div className="status-text text-dark">
          <b>Status:</b>
        </div>
        <Status status={status} />
        <div className="measurements jc-center">
          <OneCondition
            title="Temperature"
            measurement={measurement == null ? null : measurement.temperature}
            unit="ºC"
          />
          <OneCondition
            title="Humidity"
            measurement={measurement == null ? null : measurement.humidity}
            unit="%"
          />
          <OneCondition
            title="CO2"
            measurement={measurement == null ? null : 0}
            unit="ppm"
          />
          <OneCondition
            title="Light"
            measurement={measurement == null ? null : 0}
            unit="lux"
          />
        </div>
        <p>{error}</p>
      </div>
    </div>
  );
}
export default Dashboard;
