import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

const Model = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div
         className="grid place-items-center absolute top-0 h-screen w-screen z-70 backdrop-blur">
        <div className="m-auto relative z-80 min-h-[200px] min-w-[80%] bg-white p-4">
          <div className="flex justify-end">
            <AiOutlineClose className="self-end text-2xl" onClick={onClose}/>
          </div>
          {children}
        </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Model;
