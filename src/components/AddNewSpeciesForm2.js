import FormInput from "./FormInput";
import "./css/AddNewSpecies2.css";

import { useState } from "react";

function AddNewSpeciesForm2(props) {
  let title = props.title;
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [co2, setCo2] = useState("");
  const [light, setLight] = useState("");

  return (
    <div className="form-2 bg-dark rounded-20 column jc-space-evenly very-slightly-faded">
      <div className="form-title text-light ultra condition-title">{title}</div>
      <div className="row jc-space-evenly">
        <FormInput
          title="Temp. (ºC)"
          value={temperature}
          step={0.1}
          onChange={(event) => {
            setTemperature(event.target.value);
          }}
        />
        <FormInput
          title="Humidity (%)"
          value={humidity}
          step={1}
          onChange={(event) => {
            setHumidity(event.target.value);
          }}
        />
      </div>
      <div className="row jc-space-evenly">
        <FormInput
          title="CO2 (?)"
          value={co2}
          step={10}
          onChange={(event) => {
            setCo2(event.target.value);
          }}
        />
        <FormInput
          title="Light (?)"
          value={light}
          step={5}
          onChange={(event) => {
            setLight(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default AddNewSpeciesForm2;
