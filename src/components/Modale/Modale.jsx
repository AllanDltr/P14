import React from "react";
import "./Modale.css";

export function Modal({setOpenModal}) {
  return (
    <div className="modal__Background">
      <div className="modal__Container">
        <div className="title__CloseBtn">
          <button onClick={() => {setOpenModal(false)}}>
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