import "./css/Input.css";
import "./css/General.css";

function Input(props) {
  return (
    <input
      className="input rounded-20 poppins"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
}

export default Input;
