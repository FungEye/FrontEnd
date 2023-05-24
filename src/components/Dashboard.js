import "./css/Dashboard.css";
import { useState, useEffect } from "react";
import { useAuthHeader } from "react-auth-kit";
import OneCondition from "./OneCondition";
import Status from "./Status";
import { getTimeString, getDateString } from "../util/DateTimeFormatter";
import { useParams } from "react-router-dom";
import Input from "./Input";
import TextArea from "./TextArea";
import ButtonPrimary from "./ButtonPrimary";
import { getTodayDate } from "../util/DateTimeFormatter";


function Dashboard({ isNew }) {
  const { boxId } = useParams();
  const [measurement, setMeasurement] = useState(null);
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  const [toggleMessage, setToggleMessage] = useState("");
  const [status] = useState("Good");
  const [mushroomName] = useState("?");
  const [error, setError] = useState("");
  const [developmentStage, setDevelopmentStage] = useState("...")
  const authHeader = useAuthHeader();


  const [yieldWeight, setYieldWeight] = useState("");
  const [comment, setComment] = useState("");


  useEffect(() => {
    const fetchData = () => {
      setError("");
      fetch(
        `https://fungeye-383609.ey.r.appspot.com/box${boxId}/measurements/latest?stage=true`,
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
          setMeasurement(m);
          let devStage = m.developmentStage;
          let devStageCap = devStage.charAt(0).toUpperCase() + devStage.slice(1);
          setDevelopmentStage(devStageCap)
          setTime(getTimeString(m.id.dateTime));
          setDate(getDateString(m.id.dateTime));
          // setMushroomName(m.)
        })
        .catch((err) => setError("Failed to fetch data."));
    };

    if (!isNew) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  async function submit(yieldObj) {
    console.log(yieldObj);
    let url = "https://fungeye-383609.ey.r.appspot.com/harvest/"
    await fetch(
      url,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: authHeader(),
        },
        body: JSON.stringify(yieldObj)
      },
    )
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return res.text().then(text => { throw new Error(text) })
    })
      .catch(err => {
        console.log(err);
      });
  }


  async function submitYields() {
    const today = getTodayDate();
    const yieldObject = {
      //TODO change growid to the one we are gonna get from backend
      // instead of hardcoded.
      "growId": 2,
      "weight": yieldWeight,
      "harvestDate": {
        "year": today.year,
        "month": today.month,
        "day": today.day
      },
      "comment": comment,
    }
    submit(yieldObject);
  }

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
        <div className="mushroom-title text-dark ultra">{mushroomName}</div>
        <div className="box text-dark w-100">Box #{boxId}</div>
        <div className="date text-dark">
          <b>{date}</b>
        </div>
        <div className="text-dark row jc-space-evenly align-items-center w-100 ">

          <div className="big-time p-10">
            <b>
              {isNew
                ? "No measurements yet, come back later"
                : time == null
                  ? "Loading date..."
                  : time}
            </b>
          </div>
        </div>
        {!isNew ? (
          <>
            <div className="row status-row">
              <div className="column">
                <div className="status-text text-dark">
                  <b>Growth Phase:</b>
                  <Status status={developmentStage} />
                </div>
              </div>
              <div className="column">
                <div className="status-text text-dark">
                  <b>Status:</b>
                </div>
                <Status status={status} />
              </div>
            </div>
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
      <div className="dashboard-register-yields align-items-center column">
        <div className="text-dark register-yields-text varela">Register Yields?</div>
        <Input title="Weight (grams)"
          value={yieldWeight}
          onChange={(event) => {
            setYieldWeight(event.target.value);
          }} />
        <TextArea onChange={(event) => {
          setComment(event.target.value);
        }} value={comment}
          title="Comment" />
        <ButtonPrimary text="Submit" onClick={() => submitYields()} />
      </div>
      <p>{error}</p>
    </div>
  );
}

export default Dashboard;
