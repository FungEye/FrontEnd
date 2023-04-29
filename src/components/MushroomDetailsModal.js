import "./css/MushroomDetailsModal.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import XButton from "./XButton";


function MushroomDetailsModal(props){

    if (!props.show) {
        return null;
    }

    let mushroom = props.mushroom;
    let setShow = props.setShow;

    return(
        <div className="md-modal">
            <div className="md-modal-content">
                <div className="md-modal-header align-items-center bg-dark row jc-space-between text-light poppins very-slightly-faded">
                    <div>Mushroom Details</div><XButton onClick={() => setShow(false)}/>
                </div>
                <div className="md-modal-body bg-light column very-slightly-faded">
                    <div className="md-modal-body-top row align-items-center jc-space-between">
                        <div className="ultra md-modal-body-title text-dark">
                            {mushroom.shroomname}
                        </div>
                        <img className="img-100px" src={mushroom.imgsrc} alt="mushroomicon"></img>
                    </div>
                    <div className="md-modal-body-info row jc-space-between">
                        <div className="column jc-space-between">
                            <div className="md-modal-info-text column text-dark">
                                <div><b>Origin: </b>{mushroom.origin}</div>
                                <div><b>Description: </b>{mushroom.description}</div>
                             </div>
                             <div className="row btns">
                                <ButtonSecondary text="Back" onClick={() => setShow(false)}/>
                                <ButtonPrimary text="Pick"/>
                             </div>
                        </div>
                        
                        <div className="md-modal-info-graphs border-dark">

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )

}

export default MushroomDetailsModal;