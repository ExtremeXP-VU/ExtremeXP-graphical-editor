import { Outlet, useNavigate, useLocation } from "react-router-dom";

import logo from "../../assets/extremeXP_logo.png";

import "./style.scss";

const Account = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes("login");
  const loginSelectedClass = isLogin ? "selected" : "";
  const registerSelectedClass = isLogin ? "" : "selected";

  const navigate = useNavigate();

  const handleModeSwitch = () => {
    if (isLogin) {
      navigate("/account/register");
    } else {
      navigate("/account/login");
    }
  };

  return (
    <>
      <div className="account">
        <div className="account__banner">
          <img src={logo} alt="logo" className="account__banner__logo" />
          <div className="account__banner__title">
            ExtremeXP Graphical Editor
          </div>
        </div>
        <div className="account__content">
          <div className="account__content__tabs">
            <button
              className={`account__content__tabs__tab ${loginSelectedClass}`}
              onClick={handleModeSwitch}
            >
              Login
            </button>
            <button
              className={`account__content__tabs__tab ${registerSelectedClass}`}
              onClick={handleModeSwitch}
            >
              Register
            </button>
          </div>
          <div className="account__content__form">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
