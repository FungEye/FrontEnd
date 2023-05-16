import "./css/MushroomDetailsModal.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import XButton from "./XButton";



function ArchiveModal(props){

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
                    </div>
                    <div className="md-modal-body-info row jc-space-between">
                        <div id="md-modal-body-left"className="column jc-space-between">
                            <div className="md-modal-info-text column text-dark">
                                <div><b>hey: </b></div>
                             </div>
                             <div className="row btns jc-center">
                                <ButtonSecondary text="Archive" />
                                <ButtonSecondary text="Back" onClick={() => setShow(false)}/>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ArchiveModal;