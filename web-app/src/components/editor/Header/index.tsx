import "./style.scss";
import logo from "../../../assets/extremeXP_logo.png";

const Header = () => {
  const fileName = localStorage.getItem("fileName");

  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__name">{`${fileName}`}</div>
    </div>
  );
};

export default Header;
