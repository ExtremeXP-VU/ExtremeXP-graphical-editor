import { useNavigate } from "react-router-dom";
import "../LoginForm/style.scss";

const RegisterForm = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate(`/`);
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
          />
        </div>
        <div className="login__form__item">
          <div className="login__form__item__title"> password </div>
          <input
            className="login__form__item__content"
            type="password"
            placeholder="admin"
          />
        </div>
        <div className="login__form__item">
          <div className="login__form__item__title"> confirm password </div>
          <input
            className="login__form__item__content"
            type="password"
            placeholder="admin"
          />
        </div>
      </div>
      <button className="login__submit" onClick={handleRegister}>
        REGISTER
      </button>
    </>
  );
};

export default RegisterForm;
