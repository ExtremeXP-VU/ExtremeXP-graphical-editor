import React from "react";

import "./style.scss";

interface SideBarProps {
  onExecution: () => void;
  onSave: () => void;
  onSaveAs: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ onExecution, onSave, onSaveAs }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__execution">
        <button
          className="sidebar__execution__button"
          onClick={() => {
            onExecution();
          }}
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
    </div>
  );
};

export default SideBar;
