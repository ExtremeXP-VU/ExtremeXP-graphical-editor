import React from "react";

import { message } from "../../../utils/message";

import "./style.scss";

interface SideBarProps {
  onSave: () => void;
  onSaveAs: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ onSave, onSaveAs }) => {
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
    </div>
  );
};

export default SideBar;
