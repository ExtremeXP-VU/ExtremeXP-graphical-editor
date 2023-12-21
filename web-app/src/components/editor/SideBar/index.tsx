import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { message } from "../../../utils/message";

import "./style.scss";

interface SideBarProps {
  onSave: () => void;
  onSaveAs: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ onSave, onSaveAs }) => {
  const navigate = useNavigate();
  const expID = useLocation().pathname.split("/")[2];
  const specificationID = useLocation().pathname.split("/")[3];

  const handleGoBack = () => {
    if (localStorage.getItem("token") && localStorage.getItem("username")) {
      if (specificationID && expID) {
        navigate(`/repository/experiments/${expID}/specifications`);
      } else {
        navigate("/repository/experiments");
      }
    } else {
      navigate("/account/login");
    }
  };

  function handleExecution() {
    message("Execution is not implemented yet");
  }

  return (
    <div className="sidebar">
      <div className="sidebar__execution">
        <button
          className="sidebar__execution__button"
          onClick={handleExecution}
        >
          Execution
        </button>
      </div>
      <div className="sidebar__files">
        <button
          className="sidebar__files__button__save"
          onClick={() => {
            onSave();
          }}
        >
          Save
        </button>
        <button
          className="sidebar__files__button__saveAs"
          onClick={() => {
            onSaveAs();
          }}
        >
          Save as
        </button>
      </div>
      <div className="sidebar__back">
        <button className="sidebar__back__button" onClick={handleGoBack}>
          <span className="iconfont">&#xe79b;</span>
          <p> repository</p>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
