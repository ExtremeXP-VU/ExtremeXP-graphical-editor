import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./style.scss";

import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .get("http://localhost:5555/")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // navigate(`/`);
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
    </>
  );
};

export default LoginForm;
