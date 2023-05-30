import "../css/AddNewSpecies2.css";

function FormInput(props) {
  return (
    <div className="form-input column align-items-center">
      <div className="form-input-title varela text-light">
        <b>{props.title}</b>
      </div>
      <div className="row">
        <div className="column">
          <div className="text-light">min</div>
          <input
            type="number"
            step={props.step}
            onChange={props.onMinChange}
            value={props.minValue}
            min={props.minPossible}
            max={props.maxPossible}
            className="form-input-field rounded-20 text-dark bg-light varela"
          />
        </div>
        <div className="column">
          <div className="text-light">max</div>
          <input
            type="number"
            step={props.step}
            onChange={props.onMaxChange}
            value={props.maxValue}
            min={props.minPossible}
            max={props.maxPossible}
            className="form-input-field rounded-20 text-dark bg-light varela"
          />
        </div>
      </div>
    </div>
  );
}

export default FormInput;
