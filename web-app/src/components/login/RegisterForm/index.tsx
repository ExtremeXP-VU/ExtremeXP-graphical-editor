import "../LoginForm/style.scss";

import React, { useState, useRef } from "react";
import useRequest from "../../../utils/useRequest";
import Modal, { ModalInterfaceType } from "../../general/Modal";

interface RegisterFormProps {
  onSwitchMode: () => void;
}

type ResponseType = {
  message: string;
  data: {
    jwt: string;
  };
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchMode }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const modalRef = useRef<ModalInterfaceType>(null!);
  const { request } = useRequest<ResponseType>();

  const handleRegister = () => {
    if (!username || !password)
      return modalRef.current?.showMessage("username or password is empty");

    if (password !== confirmPassword)
      return modalRef.current?.showMessage("passwords do not match");

    request({
      url: `users/create`,
      method: "POST",
      data: {
        username: username,
        password: password,
      },
    })
      .then((response) => {
        if (response) {
          modalRef.current?.showMessage("User created successfully.");
          setTimeout(() => {
            onSwitchMode();
          }, 2000);
        }
      })
      .catch((error) => {
        modalRef.current?.showMessage(
          error.response.data?.message || "unknown error"
        );
      });
  };

  return (
    <>
      <div className="login__form">
        <div className="login__form__item">
          <div className="login__form__item__title"> username </div>
          <input
            className="login__form__item__content"
            type="text"
            placeholder="admin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login__form__item">
          <div className="login__form__item__title"> password </div>
          <input
            className="login__form__item__content"
            type="password"
            placeholder="admin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login__form__item">
          <div className="login__form__item__title"> confirm password </div>
          <input
            className="login__form__item__content"
            type="password"
            placeholder="admin"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <button className="login__submit" onClick={handleRegister}>
        REGISTER
      </button>
      <Modal ref={modalRef} />
    </>
  );
};

export default RegisterForm;
