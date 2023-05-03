import "./css/ChooseBoxModal.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import XButton from "./XButton";
import React, { useState } from "react";
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
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title"> props.title </h4>
          </div>
          <div className="modal-body">props.children</div>
          <div className="modal-footer">
            <ButtonPrimary onClick={props.onClose}>Close</ButtonPrimary>
            <ButtonSecondary onClick={props.onSubmit}>
              Submit {":)"}
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ChooseBoxModal;
