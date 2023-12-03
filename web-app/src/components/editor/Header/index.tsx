import "./style.scss";

const Header = () => {
  const fileName = localStorage.getItem("fileName");

  return (
    <div className="header">
      <div className="header__logo">
        <img src="./extremeXP_logo.png" alt="logo" />
      </div>
      <div className="header__name">{`${fileName}`}</div>
    </div>
  );
};

export default Header;
