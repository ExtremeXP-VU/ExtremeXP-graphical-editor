import "./style.scss";
import React from "react";
import logo from "../../../assets/extremeXP_logo.png";

interface HeaderProps {
  specName: string;
}

const Header: React.FC<HeaderProps> = ({ specName }) => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__left__name">{`${specName}`}</div>
      </div>
      <div className="header__right"></div>
    </div>
  );
};

export default Header;
