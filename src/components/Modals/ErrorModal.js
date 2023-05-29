import ButtonPrimary from "../Buttons/ButtonPrimary";
import XButton from "../Buttons/XButton";
import "../css/ErrorModal.css";
function ErrorModal(props) {
  if (!props.show) {
    return null;
  }
  let errorMessage = props.message;
  let setShow = props.setShow;

  return (
    <div className="md-modal">
      <div className="md-modal-content error-modal">
        <div className="md-modal-header align-items-center bg-dark row jc-space-between text-light poppins very-slightly-faded">
          <div>Error</div>
          <XButton onClick={() => setShow(false)} />
        </div>
        <div className="md-modal-body text-dark align-items-center bg-light column very-slightly-faded">
          <div className="row w-100 align-items-center">
            <div>
              <img
                className="img-100px"
                alt="warning triangle"
                src="https://em-content.zobj.net/source/microsoft-teams/363/warning_26a0-fe0f.png"
              />
            </div>
            <div className="column w-100 align-items-center p-10">
              <div className="error-message">{errorMessage}</div>
            </div>
          </div>
          <ButtonPrimary
            text="Back"
            onClick={() => {
              setShow(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
