import "./style.scss";

import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import { logout } from "../../stores/accountStore";

const Repository = () => {
  const location = useLocation();
  const isExperiment = location.pathname.includes("/experiments");
  const experimentSelectedClass = isExperiment ? "selected" : "";
  const userSelectedClass = isExperiment ? "" : "selected";

  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate("/account/login");
  };

  return (
    <div className="page repository">
      <div className="repository__panel">
        <div className="repository__panel__header">
          <span>Dashboard</span>
        </div>
        <div className="repository__panel__items">
          <Link to={"/dashboard/projects"}>
            <div
              className={`repository__panel__items__item ${experimentSelectedClass}`}
            >
              <span className="iconfont">&#xe6cf;</span>
              <p>Experiments</p>
            </div>
          </Link>
          <Link to={"/dashboard/user"}>
            <div
              className={`repository__panel__items__item ${userSelectedClass}`}
            >
              <span className="iconfont">&#xe63d;</span>
              <p>User</p>
            </div>
          </Link>
        </div>
        <div className="repository__panel__sign-out">
          <button
            className="repository__panel__sign-out__button"
            onClick={handleSignOut}
          >
            <span className="iconfont">&#xe6a5;</span>
            <span>sign out</span>
          </button>
        </div>
      </div>
      <div className="repository__content">
        <Outlet />
      </div>
    </div>
  );
};

export default Repository;
