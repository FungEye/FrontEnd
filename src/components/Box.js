import "./css/Box.css";
import { useState } from "react";

function Box() {
  const initialMeasurement = {
    temperature: 0,
    humidity: 0,
    timestamp: 0,
    boxId: 0,
  };
  const [measurement, setMeasurement] = useState(initialMeasurement);

  function handleClick(event) {
    fetch(`https://1rygl.wiremockapi.cloud/1/measurements/current`)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((m) => {
        const temp = {
          temperature: m.temperature,
          humidity: m.humidity,
          timestamp: m.timestamp,
          boxId: m.boxId,
        };
        setMeasurement({ ...measurement, ...temp });
      })
      .catch((err) => console.log(err));
  }

  return (

      <div class="container">
        <h1>Funghi Box</h1>
        <div class="measurements">
        <ul> 
        <li>Humidity: {measurement.humidity}</li>
        <li>Temperature: {measurement.temperature}</li>
        <li>boxId: {measurement.boxId} </li>
        <li>timestamp: {measurement.timestamp}</li>
        </ul>
          </div>
        <div class="button-container">
        <button class="button-54" onClick={handleClick}>Fetch latest conditions</button>
        </div>
      </div>
  );
}

export default Box;
