import "./css/AddNewSpecies2.css";

function FormInput(props) {

    return (
        <div className="form-input column align-items-center">
            <div className="form-input-title poppins text-light">{props.title}</div>
            <input 
            type="number" 
            step={props.step} 
            onChange={props.onChange}
            value={props.value}
            className="form-input-field rounded-20 text-dark bg-light varela"/>
        </div>
    )
}

export default FormInput