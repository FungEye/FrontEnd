import "./css/Dashboard.css";
import { useState, useEffect } from "react";
import { useAuthHeader } from "react-auth-kit";
import ButtonPrimary from "./ButtonPrimary";
import OneCondition from "./OneCondition";
import Status from "./Status";
import { getTimeString, getDateString } from "../util/DateTimeFormatter";
import { useParams } from "react-router-dom";
import Input from "./Input";
import TextArea from "./TextArea";
import { getTodayDate } from "../util/DateTimeFormatter";
import { setErrMsg, errorMessages } from "../util/ErrorMessages";
import ErrorModal from "./ErrorModal";

function Dashboard({ isNew }) {
  const { boxId } = useParams();
  const [measurement, setMeasurement] = useState(null);
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  const [toggleMessage, setToggleMessage] = useState("");
  const [status] = useState("Good");
  const [mushroomName, setMushroomName] = useState("?");
  const [error, setError] = useState("");
  const [developmentStage, setDevelopmentStage] = useState("...");
  const authHeader = useAuthHeader();

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const [yieldWeight, setYieldWeight] = useState("");
  const [comment, setComment] = useState("");
  const [yieldsMessage, setYieldsMessage] = useState("");

  const [grow, setGrow] = useState(null);

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
          else {
            setErrMsg(setErrorMessage, response.status);
            setShowErrorModal(true);
          }
        })
        .then((m) => {
          setMeasurement(m);
          let devStage = m.developmentStage;
          let devStageCap =
            devStage.charAt(0).toUpperCase() + devStage.slice(1);
          setDevelopmentStage(devStageCap);
          setTime(getTimeString(m.id.dateTime));
          setDate(getDateString(m.id.dateTime));
          const growId = m.growId;
          return fetch(`https://fungeye-383609.ey.r.appspot.com/grow/${growId}`,
            {
              method: "GET",
              headers: {
                Authorization: authHeader(),
              },
            });

        })
        .then((response) => {
          if (response.ok) return response.json()
          else {
            setErrMsg(setErrorMessage, response.status);
            setShowErrorModal(true);
          }
        })
        .then((m) => {
          setGrow(m);
          const mushroomId = m.mushroomId;
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
          else {
            setErrMsg(setErrorMessage, response.status);
            setShowErrorModal(true);
          }
        })

        .then((m) => {
          setMushroomName(m.name);
        })
        .catch((err) => {
          setErrorMessage(errorMessages.errBefore);
          setShowErrorModal(true);
        });
    };

    if (!isNew) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function submit(yieldObj) {
    let url = "https://fungeye-383609.ey.r.appspot.com/harvest/";
    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authHeader(),
      },
      body: JSON.stringify(yieldObj),
    })
      .then((res) => {
        if (res.ok) {
          setYieldWeight("");
          setComment("");
          setYieldsMessage("Seemed successful!")
          return res.json();
        }
        return res.text().then((text) => {
          setYieldsMessage("Error? :" + text);
        });
      })
      .catch((err) => {
        setYieldsMessage("Error? :" + err.message);
      });
  }

  async function submitYields() {
    const today = getTodayDate();
    const yieldObject = {
      growId: grow.id,
      weight: yieldWeight,
      harvestDate: {
        year: today.year,
        month: today.month,
        day: today.day,
      },
      comment: comment,
    };
    await submit(yieldObject);
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
        if (response.ok)
          setToggleMessage("Light in your box has been toggled.");
        else {
          setErrMsg(setErrorMessage, response.status);
          setShowErrorModal(true);
        }
      })
      .catch((err) => {
        setErrorMessage(errorMessages.errBefore);
        setShowErrorModal(true);
      });
    setTimeout(() => {
      setToggleMessage("");
    }, 5000);
  }

  return (
    <div className="cont maxw-95 column varela bg-light rounded-20 column jc-center very-slightly-faded border-dark">
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
            <div className="row status-row flex-wrap jc-center">
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
              <ButtonPrimary wide={true} text="Toggle Light in Box" onClick={toggle} />
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
        <div className="text-dark register-yields-text varela">
          Register Yields?
        </div>
        <Input
          title="Weight (grams)"
          value={yieldWeight}
          onChange={(event) => {
            setYieldWeight(event.target.value);
          }}
        />
        <TextArea
          onChange={(event) => {
            setComment(event.target.value);
          }}
          value={comment}
          title="Comment"
        />
        <div className="">
          {yieldsMessage}
        </div>
        <ButtonPrimary text="Submit" onClick={() => submitYields()} />
      </div>
      <p>{error}</p>
      <ErrorModal show={showErrorModal} setShow={setShowErrorModal} message={errorMessage} />

    </div>
  );
}

export default Dashboard;
