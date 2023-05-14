import ButtonPrimary from "./ButtonPrimary";
import trashIcon from "../img/trash-2.svg";

function OverviewBox(props) {

    let boxId = props.boxId;
    let shroomgrowing = props.shroomgrowing;

    let description;
    let buttonAndTrash;

    if (shroomgrowing) {
        description =
            <div className="row op-info-row text-dark">
                <div className="op-info-value">Growing</div>
                <div className="op-info">{shroomgrowing}</div>
            </div>
    }

    else {
        description =
            <div className="op-info-value">Vacant</div>;

        buttonAndTrash = 
        <div className="align-items-center op-box-btn-and-icon">
            <ButtonPrimary text="Start Grow" />
            <img className="pointer" src={trashIcon}></img>
        </div>
    }




    return (
        <div className="op-grow row border-dark bg-light text-dark varela rounded-20 very-slightly-faded align-items-center">
            <img className="op-icon" src={"https://cdn.icon-icons.com/icons2/945/PNG/512/Office_-12_icon-icons.com_73953.png"}></img>
            <div className="column w-100 align-items-start">
                <div className="op-shroom-name ultra text-dark">Box #{boxId}</div>
                {description}
            </div>
            {buttonAndTrash}
        </div>
    )
}

export default OverviewBox