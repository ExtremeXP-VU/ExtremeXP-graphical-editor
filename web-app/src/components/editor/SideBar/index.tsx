import React from "react";
import "./style.scss";

interface SideBarProps {
  onSave: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ onSave }) => {
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
        <button className="sidebar__files__button__load">Load</button>
      </div>
    </div>
  );
};

export default SideBar;
