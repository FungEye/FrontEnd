import "./css/CreateBoxModal.css";
import "./css/General.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import Input from "./Input";
import { useState } from "react";
import { useAuthUser, useAuthHeader } from "react-auth-kit";

const ChooseBoxModal = (props) => {
  const [eui, setEui] = useState("");
  const auth = useAuthUser();
  const authHeader = useAuthHeader();
  function createNewBox() {
    console.log(authHeader());
    console.log(eui);
    console.log("AUTH().NAME: " + auth().name);
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
        console.log(response);
        if (response.ok) return response.json();
      })
      .then((m) => {
        console.log(m.id);
      })
      .catch((err) => console.log(err.message));
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

          <div className="modal-question text-dark">Please enter the EUI</div>
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
            <ButtonSecondary onClick={props.onClose} text="Cancel" />
            <ButtonPrimary onClick={createNewBox} text="Create" />
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.body
  );
};

export default ChooseBoxModal;
