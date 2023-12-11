import "./style.scss";

import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import useRequest from "../../../utils/useRequest";

import Modal, { ModalInterfaceType } from "../../general/Modal";

type ResponseType = {
  message: string;
  data: {
    jwt: string;
  };
};

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const modalRef = useRef<ModalInterfaceType>(null!); // ! means that we are sure that this variable is not null

  const url = `http://localhost:80/users/login?username=${username}&password=${password}`;
  const { request } = useRequest<ResponseType>(url, "POST", {});

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password)
      return modalRef.current?.showMessage("username or password is empty");

    request()
      .then((response) => {
        if (response) {
          localStorage.setItem("jwt", response.data.jwt);
          navigate(`/`);
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
      </div>
      <button className="login__submit" onClick={handleLogin}>
        LOGIN
      </button>
      <Modal ref={modalRef} />
    </>
  );
};

export default LoginForm;
