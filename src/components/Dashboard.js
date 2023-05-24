import "./css/Dashboard.css";
import { useState, useEffect } from "react";
import { useAuthHeader } from "react-auth-kit";
import ButtonSecondary from "./ButtonSecondary";
import OneCondition from "./OneCondition";
import Status from "./Status";
import { getTimeString, getDateString } from "../util/DateTimeFormatter";
import { useParams } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";

function Dashboard({ isNew }) {
  const { boxId } = useParams();
  const [measurement, setMeasurement] = useState(null);
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
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
      fetch(
        `http://fungeye-383609.ey.r.appspot.com/${boxId}/light`,
        {
          method: "POST",
          headers: {
            Authorization: authHeader(),
            Accept: "application/json",
            "Content-Type": "application/json",
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
  async function togglelight(sendDownlinkMessage) {
    let url = `http://fungeye-383609.ey.r.appspot.com/${boxId}/light`;
    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authHeader(),
      },
      body: JSON.stringify(sendDownlinkMessage),
    });
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
            <div className="togglelight">
            <ButtonPrimary onClick={() => this.sendDownlinkMessage()} wide={true} text="Toggle Light" />
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
