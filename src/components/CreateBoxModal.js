import "./css/CreateBoxModal.css";
import "./css/General.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";

const ChooseBoxModal = (props) => {
  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
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
      </div>
    </CSSTransition>,
    document.body
  );
};

export default ChooseBoxModal;
