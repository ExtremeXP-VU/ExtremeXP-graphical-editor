import "./style.scss";

import { useNavigate, Outlet, useLocation } from "react-router-dom";

const Repository = () => {
  const location = useLocation();
  const isSpecification = location.pathname.includes("/specification");
  const specificationSelectedClass = isSpecification ? "selected" : "";
  const datasetSelectedClass = isSpecification ? "" : "selected";

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/account/login");
  };

  const handleModeSwitch = () => {
    if (isSpecification) {
      navigate(`/repository/${localStorage.getItem("username")}/dataset`);
    } else {
      navigate(`/repository/${localStorage.getItem("username")}/specification`);
    }
  };

  return (
    <div className="page repository">
      <div className="repository__panel">
        <div className="repository__panel__header">
          <span>Repository</span>
        </div>
        <div className="repository__panel__items">
          <div
            className={`repository__panel__items__item ${specificationSelectedClass}`}
            onClick={handleModeSwitch}
          >
            <span className="iconfont">&#xe610;</span>
            <p>Specification</p>
          </div>
          <div
            className={`repository__panel__items__item ${datasetSelectedClass}`}
            onClick={handleModeSwitch}
          >
            <span className="iconfont">&#xe742;</span>
            <p>Dataset</p>
          </div>
        </div>
        <div className="repository__panel__sign-out">
          <button
            className="repository__panel__sign-out__button"
            onClick={handleSignOut}
          >
            sign out
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
