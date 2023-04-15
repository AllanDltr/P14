import React from "react";
import "./Modale.css";

export function Modal({onClose}) {

  return (
    <div className="modal__Background">
      <div className="modal__Container">
        <div className="title__CloseBtn">
          <button onClick={(onClose)}>
            X
          </button>
        </div>
        <div className="modal__body">
          <p>Employee Created !</p>
        </div>
      </div>
    </div>
  )
}