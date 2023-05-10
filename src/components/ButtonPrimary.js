import "./css/General.css";
import "./css/Button.css";
 
function ButtonPrimary(props) {
    let classes = "button bg-dark text-light poppins raise faded";
    if (props.wide) {
        classes += " wide";
    }
    return <button className={classes} onClick={props.onClick}>{props.text}</button>
}

export default ButtonPrimary