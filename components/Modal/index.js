import ModalContext from "@components/context/Modal/ModalContext";
import React, { useContext, useEffect, useState } from "react";
import ReactModal from "react-modal";

export default function Modal({ trigger, children }) {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      {trigger && React.cloneElement(trigger, { onClick: openModal })}
      <ReactModal
        isOpen={open}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            backgroundColor: "transparent",
          },
        }}
        contentLabel="Example Modal"
      >
        <div data-theme="cupcake">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <button
                onClick={closeModal}
                className="btn btn-sm btn-ghost btn-circle absolute right-2 top-2"
              >
                ✕
              </button>
              {children}
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
}