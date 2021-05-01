import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

let modalRoot = document.getElementById("modal-root");
if (!modalRoot) {
  modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(modalRoot);
}

export default (props) => {
  return ReactDOM.createPortal(
    <div className="ModalWrapper">{props.children}</div>,
    modalRoot
  );
};
