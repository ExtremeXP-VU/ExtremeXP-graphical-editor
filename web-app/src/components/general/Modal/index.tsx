import "./style.scss";
import { useState, forwardRef, useImperativeHandle } from "react";

export type ModalInterfaceType = {
  showMessage: (message: string) => void;
};

const Modal = forwardRef<ModalInterfaceType>((props, ref) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // This hook is used to expose the function showMessage to the parent component
  useImperativeHandle(
    ref,
    () => {
      return {
        showMessage(message: string) {
          setModalMessage(message);
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
          }, 1500);
        },
      };
    },
    []
  );

  return showModal ? (
    <div className="modal">
      <div className="modal__text">{modalMessage}</div>
    </div>
  ) : null;
});

export default Modal;
