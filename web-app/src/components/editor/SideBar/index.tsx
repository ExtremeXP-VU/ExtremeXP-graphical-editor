import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

interface SideBarProps {
  onSave: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ onSave }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (localStorage.getItem("token") && localStorage.getItem("username")) {
      const specification = localStorage.getItem("specification");
      if (specification) {
        const experimentID = JSON.parse(specification).experiment_id;
        navigate(`/repository/experiments/${experimentID}/specifications`);
      } else {
        navigate("/repository/experiments");
      }
    } else {
      navigate("/account/login");
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__datablock">
        <div>Data Lists</div>
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
        <button className="sidebar__files__button__saveAs">Save as</button>
        <button
          className="sidebar__files__button__load"
          onClick={() => handleGoBack()}
        >
          Back
        </button>
      </div>
      <div className="sidebar__execution">
        <button className="sidebar__execution__button">Execution</button>
      </div>
    </div>
  );
};

export default SideBar;
