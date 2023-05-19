import "../css/Input.css";
import "../css/General.css";

function Input(props) {

  let classes = "input rounded-20 poppins text-dark";
  if (props.wide) {
    classes += " wide";
  }

  return (
    <div className="column">
      <label className="poppins text-dark"><b>{props.title}</b></label>
      <input
        className= {classes}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        data-test={props.title}
        onKeyPress={props.onKeyPress}
      />
    </div>
  );
}

export default Input;
