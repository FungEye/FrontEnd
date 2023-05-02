import "./css/Input.css";
import "./css/General.css";

function Input(props) {
  return (
    <>
      <span className="poppins">{props.title}</span>
      <input
        className="input rounded-20 poppins"
        value={props.value}
        onChange={props.onChange}
        type={props.type}
      />
    </>
  );
}

export default Input;
