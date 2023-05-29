import "./css/General.css";
import "./css/XButton.css";


function XButton(props) {

    let onClick=props.onClick;

    return (
        <div onClick={onClick}className="x-button bg-light text-dark row jc-center align-items-center circled brighten"><b>X</b></div>
    )
}

export default XButton