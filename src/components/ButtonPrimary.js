import "./css/General.css";
import "./css/Button.css";
 
function ButtonPrimary(props) {
    return <button className="button bg-dark text-light poppins raise faded" onClick={props.onClick}>{props.text}</button>
}

export default ButtonPrimary