import { useState } from "react";

import LoginForm from "../../components/login/LoginForm";
import RegisterForm from "../../components/login/RegisterForm";

import logo from "../../assets/extremeXP_logo.png";

import "./style.scss";

const Login = () => {
  const [loginMode, setLoginMode] = useState(true);

  function handleModeSwitch() {
    setLoginMode(!loginMode);
  }

  const renderLoginComponent = () => {
    if (loginMode) {
      return <LoginForm />;
    } else {
      return <RegisterForm onSwitchMode={handleModeSwitch} />;
    }
  };

  return (
    <>
      <div className="login">
        <div className="login__banner">
          <img src={logo} alt="logo" className="login__banner__logo" />
          <div className="login__banner__title">ExtremeXP Graphical Editor</div>
        </div>
        <div className="login__content">
          <div className="login__content__tabs">
            <button
              className={`login__content__tabs__tab ${
                loginMode ? "selected" : ""
              }`}
              onClick={handleModeSwitch}
            >
              Login
            </button>
            <button
              className={`login__content__tabs__tab ${
                !loginMode ? "selected" : ""
              }`}
              onClick={handleModeSwitch}
            >
              Register
            </button>
          </div>
          <div className="login__content__form">{renderLoginComponent()}</div>
        </div>
      </div>
    </>
  );
};

export default Login;
