import "./css/Box.css";
import { useState, useEffect } from "react";

function Box() {
  const [measurement, setMeasurement] = useState(null);
  const [timestamp, setTimestamp] = useState(null);

  function handleClick() {
    fetch(`https://fungeye-383609.ey.r.appspot.com/box1/measurements/latest`)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((m) => {
        setMeasurement(m);
        setTimestamp(initTimestampString(m.id.dateTime));
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    handleClick();
  }, []);

  function initTimestampString(x) {
    let result = ``;
    if (x.day < 10) {
      result += "0";
    }
    result += `${x.day}/`;
    if (x.month < 10) {
      result += "0";
    }
    result += `${x.month}/`;
    result += `${x.year} `;
    if (x.hour < 10) {
      result += "0";
    }
    result += `${x.hour}:`;
    if (x.minute < 10) {
      result += "0";
    }
    result += `${x.minute}:`;

    if (x.second < 10) {
      result += "0";
    }
    result += `${x.second}`;

    return result;
  }

  return (
    <div className="container">
      <h1>Funghi Box</h1>
      <div className="measurements">
        <ul>
          <li>Humidity: {measurement == null ? -1 : measurement.humidity}</li>
          <li>
            Temperature: {measurement == null ? -1 : measurement.temperature}
          </li>
          <li>boxId: {measurement == null ? -1 : measurement.id.boxId} </li>
          <li>
            timestamp: {timestamp == null ? "Loading date..." : timestamp}
          </li>
        </ul>
      </div>
      <div className="button-container">
        <button className="button-md" onClick={handleClick}>
          Fetch latest conditions
        </button>
      </div>
    </div>
  );
}

export default Box;
