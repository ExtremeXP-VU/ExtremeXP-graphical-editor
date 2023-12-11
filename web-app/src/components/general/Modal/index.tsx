import "./style.scss";
import {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { createPortal } from "react-dom";

export type ModalInterfaceType = {
  showMessage: (message: string) => void;
};

const Modal = forwardRef<ModalInterfaceType>((props, ref) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const divReference = useRef(document.createElement("div"));
  const divElement = divReference.current;

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

  useEffect(() => {
    if (showModal) {
      document.body.appendChild(divElement);
    } else {
      // If the div element has a parent, remove it from the body
      if (divElement.parentNode) {
        document.body.removeChild(divElement);
      }
    }
    return () => {
      if (divElement.parentNode) {
        document.body.removeChild(divElement);
      }
    };
  }, [showModal, divElement]);

  // This hook is used to append the div element to the body
  return createPortal(
    <div className="modal">
      <div className="modal__text">{modalMessage}</div>
    </div>,
    divElement
  );
});

export default Modal;
