import "./style.scss";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/extremeXP_logo.png";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    if (localStorage.getItem("token") && localStorage.getItem("username")) {
      navigate(`/repository/${localStorage.getItem("username")}/specification`);
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
