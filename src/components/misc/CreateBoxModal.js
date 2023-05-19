import ReactDOM from "react-dom";
import "../css/CreateBoxModal.css";
import "../css/General.css";
import ButtonPrimary from "../ui/ButtonPrimary";
import ButtonSecondary from "../ui/ButtonSecondary";


const ChooseBoxModal = (props) => {
  return ReactDOM.createPortal(
      <div
        className={`modal${props.show ? "show" : ""}`}
        onClick={props.onClose}
      >
        <div
          className="modal-content rounded-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header bg-light">
            <h4 className="modal-title "> Set up a new box</h4>
          </div>
          <div className="modal-body ultra text-dark align-self-center bc-box-name">
            NEW BOX
          </div>
          <div className="modal-question text-dark">
            Your new box will have ID # {props.lastBoxNumber + 1}. Proceed?
          </div>
          <div className="modal-error">{props.err}</div>
          <div className="modal-footer modal-question">
            <ButtonSecondary onClick={props.onClose} text="No" />
            <ButtonPrimary onClick={props.onSubmit} text="Yes" />
          </div>
        </div>
      </div>,
    document.body
  );
};

export default ChooseBoxModal;
