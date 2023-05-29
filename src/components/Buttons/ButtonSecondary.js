import "../css/General.css";
import "../css/Button.css";

function ButtonSecondary(props) {
  let classes =
    "button bg-light text-dark border-dark poppins raise slightly-faded";
  if (props.wide) {
    classes += " wide";
  }
  return (
    <button data-test={props.text} className={classes} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default ButtonSecondary;
