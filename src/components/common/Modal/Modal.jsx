import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const modalRoot = document.getElementById("modal-root");
const modalMessage = document.createElement("div");

export default props => {
  useEffect(() => {
    modalRoot.appendChild(modalMessage);

    return () => modalRoot.removeChild(modalMessage);
  }, []);

  const Modal = props => {
    return (
      <div className="modal">
        {props.children}
      </div>
    );
  }

  return ReactDOM.createPortal(
    <Modal {...props} />,
    modalMessage
  );
};
