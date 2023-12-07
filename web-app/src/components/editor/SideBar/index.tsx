import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

interface SideBarProps {
  onSave: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ onSave }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(`/`);
  };

  return (
    <div className="sidebar">
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
        <button className="sidebar__files__button__load" onClick={handleGoBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default SideBar;
