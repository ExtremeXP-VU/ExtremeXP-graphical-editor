import './style.scss';
import React, { memo, useEffect, useState } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { TabType, addTab } from '../../../../../stores/tabStore';
import { TaskVariantType } from '../../../../../types/task';

const handleSourceStyle = { top: 40, background: '#c3c3c3' };
const handleTargetStyle = { top: 5, background: '#c3c3c3' };

const Task = ({
  data,
  selected,
  isConnectable,
  sourcePosition = Position.Bottom,
  targetPosition = Position.Top,
}: NodeProps) => {
  const [currentTask, setCurrentTask] = useState<TaskVariantType>(
    data.variants[0]
  );
  const [taskName, setTaskName] = useState<string>(currentTask.name);
  const [taskParameter, setTaskParameters] = useState<string[]>([]);

  useEffect(() => {
    const task = data.variants.find(
      (t: TaskVariantType) => t.id_task === data.currentVariant
    );
    setCurrentTask(task);
  }, [data.currentVariant, data.variants]);

  useEffect(() => {
    setTaskName(currentTask.name);
    const parameters: string[] = [];
    currentTask.parameters.forEach((p) => {
      parameters.push(p.name);
    });
    setTaskParameters(parameters);
  }, [currentTask]);

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
        className={`node-task ${selected ? 'node-task-selected' : ''} ${
          currentTask.is_composite ? 'node-task-composite' : ''
        }`}
      >
        <div className={`node-task__name `}>{taskName}</div>
        {taskParameter.length > 0 && (
          <div className="node-task__properties ">
            {taskParameter.map((p, index) => (
              <div key={index} className="node-task__properties__property">
                {`- ${p}`}
              </div>
            ))}
          </div>
        )}
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
