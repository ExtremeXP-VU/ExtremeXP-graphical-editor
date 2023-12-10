import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import UserLogin from "../../components/login/UserLogin";
import Register from "../../components/login/Register";

import "./style.scss";

const Login = () => {
  const [loginMode, setLoginMode] = useState(true);

  function handleModeSwitch() {
    setLoginMode(!loginMode);
  }

  const renderLoginComponent = () => {
    if (loginMode) {
      return <UserLogin />;
    } else {
      return <Register />;
    }
  };

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(`/`);
    window.location.reload();
  };

  return (
    <>
      <div className="login">
        <div className="login__banner">
          <img
            src="./extremeXP_logo.png"
            alt="logo"
            className="login__banner__logo"
          />
          <div className="login__banner__title">ExtremeXP Graphical Editor</div>
        </div>
        <div className="login__selection__wrapper">
          <div className="login__selection__switch">
            <button
              className={`login__button ${loginMode ? "selected" : ""}`}
              onClick={handleModeSwitch}
            >
              Login
            </button>
            <button
              className={`login__button ${!loginMode ? "selected" : ""}`}
              onClick={handleModeSwitch}
            >
              Register
            </button>
          </div>
          <div className="login__selection__content">
            {renderLoginComponent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
