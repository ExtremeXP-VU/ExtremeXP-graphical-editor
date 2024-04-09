import React from 'react';
import TaskConfigPanel from './TaskConfigPanel';
import { useConfigPanelStore } from '../../../stores/configPanelStore';
import OperatorConfigPanel from './OperatorConfigPanel';

interface ConfigPanelProps {
  updateSideBar: () => void;
}

const ConfigPanel: React.FC<ConfigPanelProps> = ({ updateSideBar }) => {
  const selectedNodeType = useConfigPanelStore(
    (state) => state.selectedNodeType
  );
  return (
    <div>
      {selectedNodeType === 'task' && (
        <TaskConfigPanel updateSideBar={updateSideBar} />
      )}
      {selectedNodeType === 'opInclusive' && (
        <OperatorConfigPanel updateSideBar={updateSideBar} />
      )}
      {selectedNodeType === 'opExclusive' && (
        <OperatorConfigPanel updateSideBar={updateSideBar} />
      )}
    </div>
  );
};

export default ConfigPanel;
