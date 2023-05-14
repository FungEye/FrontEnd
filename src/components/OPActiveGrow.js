import { useNavigate } from "react-router-dom";
import Status from "./Status";
import "./css/OverviewPage.css";

function OPActiveGrow(props) {

    let grow = props.grow;
    let mushroom = grow.mushroom;
    let shroomname = mushroom.shroomname;
    let imgurl = mushroom.imgurl;
    let status = grow.status;
    let lastMeasured = grow.lastMeasured;
    // import that function that gets the string from a date object or whatever
    let lastMeasuredString = "11.05.2023 - 09:46"; //TODO here

    const navigate = useNavigate();

    function goToDashboard() {
        navigate("/dashboard");
    }

    // TODO change the onClick from going to the general dashboard to
    // going to a dashboard that fetches depending on the grow id
    // and all that grow id.

    return (
        <div onClick={() => goToDashboard()} className="op-grow row bg-light align-items-center rounded-20 very-slightly-faded border-dark varela pointer">
            <img className="op-icon" src={imgurl}></img>
            <div className="column w-100 align-items-start">
                <div className="op-shroom-name ultra text-dark">{shroomname}</div>
                <div className="row op-info-row text-dark align-items-center">
                    <div className="op-info">Status: </div>
                    <Status status={status} mini={true}/>
                </div>
                <div className="row op-info-row text-dark">
                    <div className="op-info">Last Measured:</div>
                    <div className="op-info-value">{lastMeasuredString}</div>
                </div>
            </div>
        </div>
    )
}

export default OPActiveGrow