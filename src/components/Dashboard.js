import "./css/Dashboard.css";
import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import ButtonSecondary from "./ButtonSecondary";
import ButtonPrimary from "./ButtonPrimary";
import OneCondition from "./OneCondition";
import Status from "./Status";
import { getTimeString, getDateString } from "../util/DateTimeFormatter";
function Dashboard() {
  let { growId } = useParams();
  const [measurement, setMeasurement] = useState(null);
  // const [timestamp, setTimestamp] = useState(null);
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  // const [status, setStatus] = useState("Good");
  const [status] = useState("Good");
  const [shroomname] = useState("Oyster");
  // const [shroomname, setShroomName] = useState("Oyster");
  const fetchData = useCallback(() => {
    fetch(`https://fungeye-383609.ey.r.appspot.com/box1/measurements/latest`)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((m) => {
        setMeasurement(m);
        // setTimestamp(initTimestampString(m.id.dateTime));
        setTime(getTimeString(m.id.dateTime));
        setDate(getDateString(m.id.dateTime));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function getTimeString(x) {
    let result = ``;
    result += `${x.hour}:`;
    if (x.minute < 10) {
      result += "0";
    }
    result += `${x.minute}`;
    return result;
  }

  function getDateString(x) {
    let result = "";
    if (x.day < 10) {
      result += "0";
    }
    result += `${x.day}/`;
    if (x.month < 10) {
      result += "0";
    }
    result += `${x.month}`;
    return result;
  }


  return (
    <div className="cont column varela bg-light rounded-20 column jc-center very-slightly-faded border-dark">
      <div className="dashboard column align-items-center">
        <div className="mushroom-title text-dark ultra">
          {shroomname} Mushroom
        </div>
        <div className="box text-dark w-100">
          {growId} Box # {measurement == null ? -1 : measurement.id.boxId}
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
            <b>
              {/* // ternary operator , with props.isNew() */}
              {time == null ? "Loading date..." : time}
            </b>
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
        <div className="togglelight">
          {" "}
          <ButtonPrimary text="Light" />{" "}
        </div>
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
      </div>
    </div>
  );
}
export default Dashboard;
