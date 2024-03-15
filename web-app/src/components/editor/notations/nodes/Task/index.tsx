import './style.scss';
import { memo, useEffect, useState } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { TabType, addTab } from '../../../../../stores/tabStore';
import {
  useConfigPanelStore,
  useParamStore,
} from '../../../../../stores/configPanelStore';
import { ParameterType, TaskDataType } from '../../../../../types/task';

const handleSourceStyle = { top: 40, background: '#c3c3c3' };
const handleTargetStyle = { top: 5, background: '#c3c3c3' };

const Task = ({
  id,
  data,
  isConnectable,
  sourcePosition = Position.Bottom,
  targetPosition = Position.Top,
}: NodeProps) => {
  const selectedTaskData = useConfigPanelStore(
    (state) => state.selectedTaskData
  );
  const selectedParamData = useParamStore((state) => state.selectedParamData);
  const selectedNodeId = useConfigPanelStore((state) => state.selectedNodeId);
  const selectedParamId = useParamStore((state) => state.selectedParamId);
  const selectedVariant = useConfigPanelStore(
    (state) => state.selectedTaskVariant
  );

  const variantIndex = data.variants.findIndex(
    (variant: TaskDataType) => variant.id_task === selectedVariant
  );

  const paramIndex = data.variants[variantIndex]?.parameters.findIndex(
    (param: ParameterType) => param.id === selectedParamId
  );

  const [currentTask, setCurrentTask] = useState<TaskDataType>(
    data.variants[0]
  );

  const [taskName, setTaskName] = useState<string>(currentTask.name);

  useEffect(() => {
    if (variantIndex !== -1 && paramIndex !== -1) {
      data.variants[variantIndex].parameters[paramIndex] = selectedParamData;
    }
  }, [selectedParamData]);

  useEffect(() => {
    if (id === selectedNodeId) {
      const variantIndex = data.variants.findIndex(
        (variant: TaskDataType) => variant.id_task === selectedVariant
      );
      if (variantIndex !== -1) {
        data.variants[variantIndex] = { ...selectedTaskData };
      }
    }
  }, [selectedNodeId, selectedTaskData]);

  useEffect(() => {
    if (id === selectedNodeId && currentTask.id_task !== selectedVariant) {
      data.currentVariant = selectedVariant;
    }
  }, [selectedNodeId, selectedVariant]);

  useEffect(() => {
    const task = data.variants.find(
      (t: TaskDataType) => t.id_task === data.currentVariant
    );
    setCurrentTask(task);
  }, [data.currentVariant, selectedTaskData]);

  useEffect(() => {
    setTaskName(currentTask.name);
  }, [selectedTaskData, currentTask]);

  const handleAddTab = (event: React.MouseEvent) => {
    event.preventDefault();

    if (!currentTask.is_composite) return;
    const tab: TabType = {
      name: currentTask.name,
      id: currentTask.id_task,
    };
    addTab(tab);
  };

  return (
    <>
      <div
        className={`node-task ${
          selectedNodeId === id ? 'node-task-selected' : ''
        } ${currentTask.is_composite ? 'node-task-composite' : ''}`}
      >
        <div className={`node-task__name ${'higher-task-name'}`}>
          {taskName}
        </div>
        {/* {properties.length > 0 && (
          <div className="node-task__properties">
            {properties.map((property, index) => (
              <div key={index} className="node-task__property">
                {property}
              </div>
            ))}
          </div>
        )} */}
        {currentTask.is_composite && (
          <div className="node-task__icon">
            <div className="node-task__icon__wrapper" onClick={handleAddTab}>
              <span className="iconfont">&#xe601;</span>
            </div>
          </div>
        )}
        <Handle
          type="source"
          position={sourcePosition}
          isConnectable={isConnectable}
          id="s-bottom"
        />

        <Handle
          type="source"
          position={Position.Right}
          isConnectable={isConnectable}
          style={handleSourceStyle}
          id="s-right"
        />
        <Handle
          type="source"
          position={Position.Left}
          isConnectable={isConnectable}
          style={handleSourceStyle}
          id="s-left"
        />

        <Handle
          type="target"
          position={targetPosition}
          isConnectable={isConnectable}
          id="t-top"
        />
        <Handle
          type="target"
          position={Position.Right}
          isConnectable={isConnectable}
          style={handleTargetStyle}
          id="t-right"
        />
        <Handle
          type="target"
          position={Position.Left}
          isConnectable={isConnectable}
          style={handleTargetStyle}
          id="t-left"
        />
      </div>
    </>
  );
};

export default memo(Task);
// export default Task;
