import React from "react";
import ReactDOM from "react-dom";
/* import "./Modal.scss"; */
const isClient =
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement;

let modalRoot;
if (isClient) {
  modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
  }
}
 const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ModalWrapper">{props.children}</div>,
    modalRoot
  );
};
 
export default Modal;
