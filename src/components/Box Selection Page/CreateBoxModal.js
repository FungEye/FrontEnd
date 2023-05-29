import "./css/CreateBoxModal.css";
import "./css/General.css";
import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import Input from "../Input";
import { useState } from "react";
import { useAuthUser, useAuthHeader } from "react-auth-kit";
import { setErrMsg } from "../../util/ErrorMessages";

const ChooseBoxModal = (props) => {
  const [eui, setEui] = useState("");
  const auth = useAuthUser();
  const authHeader = useAuthHeader();
  const [errorMessage, setErrorMessage] = useState("");

  function createNewBox() {
    fetch("https://fungeye-383609.ey.r.appspot.com/box", {
      method: "POST",
      headers: {
        Authorization: authHeader(),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: auth().name, eui: eui }),
    })
      .then((response) => {
        if (response.ok) return response.json();
        else {
          setErrMsg(setErrorMessage, response.status);
        }
      })
      .then((m) => {
        props.onSelect(m.id);
      })
      .catch((err) =>
        setErrorMessage(
          "Something went wrong. Are you sure your EUI is 16 characters long, all numbers?"
        )
      );
  }

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

          <div className="error">{errorMessage}</div>
          <div className="modal-question text-dark">
            Please enter the EUI. It must be 16 characters long.
          </div>
          <div className="modal-body">
            <Input
              title=""
              placeholder="EUI"
              value={eui}
              type="text"
              onChange={(event) => {
                setEui(event.target.value);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  createNewBox();
                }
              }}
            />
          </div>
          <div className="modal-error">{props.err}</div>
          <div className="modal-footer modal-question">
            <ButtonSecondary
              onClick={() => {
                setErrorMessage("");
                props.onClose();
              }}
              text="Cancel"
            />
            <ButtonPrimary onClick={createNewBox} text="Create" />
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.body
  );
};

export default ChooseBoxModal;
