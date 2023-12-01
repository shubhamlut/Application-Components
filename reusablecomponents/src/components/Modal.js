import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/Modal.css";
import { useRef } from "react";
import { useEffect } from "react";
const Modal = (props) => {
  const modalRef = useRef(null);

  //   useEffect(() => {
  //     modalRef.current.classList.add("open");
  //   }, []);
  const [openModal, setOpenModal] = useState(true);

  const TriggerOnBtnRightClick = () => {
    // props.triggerOnClick()
    setOpenModal(false);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  if (!openModal) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modalwrapper">
        <div className="modalcontainer">
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
            <button className="modal-close-button" onClick={closeModal}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <p>{props.description}</p>
          <div className="modal-footer">
            {/* <div className="left-corner">
            </div> */}

            <button className="btn-left" onClick={closeModal}>
              {props.btnOneLabel}
            </button>
            <button className="btn-right" onClick={TriggerOnBtnRightClick}>
              {props.btnTwoLabel}{" "}
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
