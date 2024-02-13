import React from "react";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="row justify-between bg-bgLightBlue w-full h-fit rounded-md px-5 py-4">
      {children}
    </div>
  );
};

export default Modal;
