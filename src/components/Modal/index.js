import React, { useEffect } from "react";
import "./styles/index.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      handleClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  return (
    <div className={showHideClassName} onClick={handleClose}>
      <section className="modal-main">
        {children}

        <div className="modal-body"></div>
      </section>
    </div>
  );
};

export default Modal;
