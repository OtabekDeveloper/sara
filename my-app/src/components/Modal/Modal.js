import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title " >
          <h1>Android va iOS tuzish</h1>
        </div>
        <div className="body t ms-3" id="t">
          <p>Keling, faqat rezervasyon qilaylik, do'stim: hech kim aniq aytolmaydi: iPhone haqiqatan ham Android -ga qaraganda sovuqroq - va aksincha: hech kim sizni ishontirib aytolmaydi - Android zo'r va iPhone pulni behuda sarflanadi. </p>
        </div>
        <div className="footer">
          
        </div>
      </div>
    </div>
  );
}

export default Modal;