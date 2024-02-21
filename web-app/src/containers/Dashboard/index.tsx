import "./style.scss";

import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import { logout } from "../../stores/accountStore";

import { clearTabs } from "../../stores/tabStore";
import { useEffect } from "react";

const Repository = () => {
  const location = useLocation();
  const isExperiments = location.pathname.includes("/projects");
  const isUser = location.pathname.includes("/user");
  const isTask = location.pathname.includes("/categories");
  const experimentSelectedClass = isExperiments ? "selected" : "";
  const userSelectedClass = isUser ? "selected" : "";
  const taskSelectedClass = isTask ? "selected" : "";

  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate("/account/login");
  };

  useEffect(() => {
    clearTabs();
  }, []);

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
          <Link to={"/dashboard/categories"}>
            <div
              className={`repository__panel__items__item ${taskSelectedClass}`}
            >
              <span className="iconfont">&#xe610;</span>
              <p>Tasks</p>
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
