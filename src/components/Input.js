import "./css/Input.css";
import "./css/General.css";

function Input(props) {
  return (
    <>
      <span className="poppins text-dark">{props.title}</span>
      <input
        className="input rounded-20 poppins"
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        onKeyPress={props.onKeyPress}
      />
    </>
  );
}

export default Input;
