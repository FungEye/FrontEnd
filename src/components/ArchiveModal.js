import "./css/MushroomDetailsModal.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import XButton from "./XButton";

function ArchiveModal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="md-modal" onClick={props.onClose}>
      <div className="md-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="md-modal-header align-items-center bg-dark row jc-space-between text-light poppins very-slightly-faded">
          <div>Archive confirmation:</div>
          <XButton onClick={props.onClose} />
        </div>
        <div className="md-modal-body bg-light column very-slightly-faded">
          <div className="md-modal-body-top row align-items-center jc-space-between"></div>
          <div className="md-modal-body-info row jc-space-between">
            <div id="md-modal-body-left" className="column jc-space-between">
              <div className="md-modal-info-text column text-dark">
                <div>
                  <b class="text-dark poppins">
                    Are you sure you want to archive this mushroom?{" "}
                  </b>
                </div>
              </div>
              <div className="row btns jc-center">
                <ButtonSecondary text="Back" onClick={props.onClose} />
                <ButtonPrimary text="Archive" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchiveModal;
