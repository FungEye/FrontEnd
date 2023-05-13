import "./css/Collapsible.css";
import useScript from "../hooks/useScript";

function Collapsible(props) {

    let width = props.width;

    return (
        <div className="border-dark rounded-20 bg-light overflow-hidden" style={{width: width + "px"}}>
            <button type="button" className="collapse-container bg-dark text-light poppins">{props.text}</button>
            <div className="collapse-content rounded-bottom-20 bg-light text-dark column">
                {props.content}
            </div>
        </div>
    )
}

export default Collapsible