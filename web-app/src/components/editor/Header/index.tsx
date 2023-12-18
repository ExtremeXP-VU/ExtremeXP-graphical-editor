import "./style.scss";
import React from "react";
import logo from "../../../assets/extremeXP_logo.png";

interface HeaderProps {
  specName: string;
}

const Header: React.FC<HeaderProps> = ({ specName }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__name">{`${specName}`}</div>
    </div>
  );
};

export default Header;
