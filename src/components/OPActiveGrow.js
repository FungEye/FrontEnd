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


    return(
        <div className="op-grow row">
            <img className="op-icon" src={imgurl}></img>
            <div className="column w-100 align-items-start">
                <div className="op-shroom-name ultra text-dark">{shroomname}</div>
                <div className="op-status">Status: {status}</div>
                <div className="op-last-measured">Last Measured: {}</div>
            </div>
        </div>
    )
}

export default OPActiveGrow