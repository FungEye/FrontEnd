import "./css/General.css";
import "./css/Button.css";
 

function ButtonSecondary(props) {
    return <button className="button bg-light text-dark border-dark poppins raise slightly-faded" onClick={props.onClick}>{props.text}</button>
}

export default ButtonSecondary