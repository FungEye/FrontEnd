import FormInput from "./FormInput";
import "./css/AddNewSpecies2.css";

function AddNewSpeciesForm2({ title, conditions, setConditions }) {


  function updateCondition(oldCondition, stat, minOrMax, value) {
    let newCondition = { ...oldCondition };
    switch (stat) {
      case "temp":
        switch (minOrMax) {
          case "min":
            newCondition.tempLow = value;
            break;
          case "max":
            newCondition.tempHigh = value;
            break;
          default:
            break;
        }
        break;
      case "humidity":
        switch (minOrMax) {
          case "min":
            newCondition.humidityLow = value;
            break;
          case "max":
            newCondition.humidityHigh = value;
            break;
          default:
            break;
        }
        break;
      case "co2":
        switch (minOrMax) {
          case "min":
            newCondition.co2Low = value;
            break;
          case "max":
            newCondition.co2High = value;
            break;
          default:
            break;
        }
        break;
      case "light":
        switch (minOrMax) {
          case "min":
            newCondition.lightLow = value;
            break;
          case "max":
            newCondition.lightHigh = value;
            break;
          default:
            break;
        }
        break;
      default:
        return;
    }
    return newCondition;
  }

  return (
    <div className="form-2 bg-dark rounded-20 column jc-space-evenly very-slightly-faded">
      <div className="form-title text-light ultra condition-title">{title}</div>
      <div className="row jc-space-evenly">
        <FormInput
          title="Temp. (ºC)"
          minValue={conditions.tempLow}
          maxValue={conditions.tempHigh}
          minPossible={-20}
          maxPossible={69}
          step={0.1}
          onMinChange={(event) => {
            setConditions(
              updateCondition(conditions, "temp", "min", event.target.value)
            );
          }}
          onMaxChange={(event) => {
            setConditions(
              updateCondition(conditions, "temp", "max", event.target.value)
            );
          }}
        />

        <FormInput
          title="Humidity (%)"
          minValue={conditions.humidityLow}
          maxValue={conditions.humidityHigh}
          minPossible={0}
          maxPossible={100}
          step={1}
          onMinChange={(event) => {
            setConditions(
              updateCondition(conditions, "humidity", "min", event.target.value)
            );
          }}
          onMaxChange={(event) => {
            setConditions(
              updateCondition(conditions, "humidity", "max", event.target.value)
            );
          }}
        />
      </div>
      <div className="row jc-space-evenly">
        <FormInput
          title="CO2 (ppm)"
          minValue={conditions.co2Low}
          maxValue={conditions.co2High}
          minPossible={0}
          maxPossible={30000}
          step={10}
          onMinChange={(event) => {
            setConditions(
              updateCondition(conditions, "co2", "min", event.target.value)
            );
          }}
          onMaxChange={(event) => {
            setConditions(
              updateCondition(conditions, "co2", "max", event.target.value)
            );
          }}
        />
        <FormInput
          title="Light (lux)"
          minValue={conditions.lightLow}
          maxValue={conditions.lightHigh}
          maxPossible={100000}
          minPossible={0}
          step={100}
          onMinChange={(event) => {
            setConditions(
              updateCondition(conditions, "light", "min", event.target.value)
            );
          }}
          onMaxChange={(event) => {
            setConditions(
              updateCondition(conditions, "light", "max", event.target.value)
            );
          }}
        />
      </div>
    </div>
  );
}

export default AddNewSpeciesForm2;
