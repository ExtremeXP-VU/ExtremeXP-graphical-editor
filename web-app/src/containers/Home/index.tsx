import "./style.scss";
import { useNavigate } from "react-router-dom";

import { useAccountStore } from "../../stores/accountStore";

import logo from "../../assets/extremeXP_logo.png";

const Home = () => {
  const navigate = useNavigate();
  const isLogin = useAccountStore((state) => state.isLogin);

  const handleStart = () => {
    if (isLogin) {
      navigate("/repository/experiments");
    } else {
      navigate("/account/login");
    }
  };

  return (
    <div className="home">
      <div className="home__banner">
        <img src={logo} alt="logo" className="home__banner__logo" />
        <div className="home__banner__title">ExtremeXP Graphical Editor</div>
      </div>
      <div className="home__start">
        <div className="home__start__button" onClick={handleStart}>
          Start
        </div>
      </div>
    </div>
  );
};

export default Home;
