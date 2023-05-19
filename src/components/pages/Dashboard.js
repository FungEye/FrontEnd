import { useState, useCallback, useEffect } from "react";
import { useAuthHeader } from "../../../node_modules/react-auth-kit/dist/index";
import { useParams } from "../../../node_modules/react-router-dom/dist/index";
import { getTimeString, getDateString } from "../../util/DateTimeFormatter";
import "../css/Dashboard.css";
import ButtonSecondary from "../ui/ButtonSecondary";
import Status from "./Status";
import OneCondition from "./mushroom/OneCondition";

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

  const fetchData = useCallback(() => {
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
      })
      .then((m) => {
        setMeasurement(m);
        // setTimestamp(initTimestampString(m.id.dateTime));
        setTime(getTimeString(m.id.dateTime));
        setDate(getDateString(m.id.dateTime));
      })
      .catch((err) => console.log(err));
  }, [boxId]);

  useEffect(() => {
    if (!isNew) fetchData();
  }, [isNew, fetchData]);


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
            <div className="measurements jc-center">
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
                measurement={measurement == null ? null : 0}
                unit="ppm"
              />
              <OneCondition
                title="Light"
                measurement={measurement == null ? null : 0}
                unit="lux"
              />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
export default Dashboard;
