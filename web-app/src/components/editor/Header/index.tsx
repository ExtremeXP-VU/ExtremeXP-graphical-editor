import "./style.scss";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAccountStore } from "../../../stores/accountStore";

interface HeaderProps {
  onExecution: () => void;
  onSave: () => void;
  onSaveAs: () => void;
}

const Header: React.FC<HeaderProps> = ({ onExecution, onSave, onSaveAs }) => {
  const isLogin = useAccountStore((state) => state.isLogin);

  const navigate = useNavigate();
  const expID = useLocation().pathname.split("/")[2];
  const specificationID = useLocation().pathname.split("/")[3];

  const handleGoBack = () => {
    if (isLogin) {
      if (specificationID && expID) {
        navigate(`/repository/experiments/${expID}/specifications`);
      } else {
        navigate("/repository/experiments");
      }
    } else {
      navigate("/account/login");
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <button className="header__left__back" onClick={handleGoBack}>
          <div className="header__left__back__arrow">
            <span className="iconfont">&#xe79b;</span>
          </div>
          <p>dashboard</p>
        </button>
      </div>
      <div className="header__middle"></div>
      <div className="header__right">
        <div className="header__right__files">
          <button
            className="header__right__files__button__save"
            onClick={() => {
              onSave();
            }}
          >
            Save
          </button>
          <button
            className="header__right__files__button__saveAs"
            onClick={() => {
              onSaveAs();
            }}
          >
            Save as
          </button>
        </div>
        <div className="header__right__execution">
          <button
            className="header__right__execution__button"
            onClick={() => {
              onExecution();
            }}
          >
            <span className="iconfont">&#xe606;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
