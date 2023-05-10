import "./css/Input.css";
import "./css/General.css";

function Input(props) {
  return (
    <>
      <label className="poppins text-dark"><b>{props.title}</b></label>
      <input
        className="input rounded-20 poppins text-dark"
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        onKeyPress={props.onKeyPress}
      />
    </>
  );
}

export default Input;
