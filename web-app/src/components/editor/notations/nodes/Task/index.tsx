import "./style.scss";
import { memo, useEffect, useState } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { TabType, addTab } from "../../../../../stores/tabStore";
import { TaskDataType, defaultTaskData } from "../../../../../types/task";

const Task = ({
  data,
  isConnectable,
  sourcePosition = Position.Bottom,
  targetPosition = Position.Top,
}: NodeProps) => {
  const [currentTask, setCurrentTask] = useState<TaskDataType>(defaultTaskData);
  // const [operation, setOperation] = useState(data.operation);

  useEffect(() => {
    setCurrentTask(getCurrentTaskData());
  }, [data.currentVariant]);

  const handleDoubleClick = () => {
    const tab: TabType = {
      name: currentTask.name,
      id: currentTask.id_task,
    };
    addTab(tab);
  };

  const getCurrentTaskData = () => {
    const id = data.currentVariant;
    const task = data.variants.find((t: TaskDataType) => t.id_task === id);
    return task;
  };

  return (
    <>
      <div className="node-task">
        <div className="node-task__name">{currentTask.name}</div>
        <div className="node-task__properties">
          property placeholder
          {/* <select
            className="node-task__label__selector nodrag"
            value={operation}
            onChange={(e) => {
              setOperation(e.target.value);
              data.operation = e.target.value;
            }}
          >
            <option value="mean">mean</option>
            <option value="sum">sum</option>
            <option value="min">min</option>
            <option value="max">max</option>
          </select> */}
        </div>
        {currentTask.is_composite && (
          <div className="node-task__icon">
            <div
              className="node-task__icon__wrapper"
              onClick={handleDoubleClick}
            >
              <span className="iconfont">&#xe601;</span>
            </div>
          </div>
        )}
        <Handle
          type="source"
          position={sourcePosition}
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={targetPosition}
          isConnectable={isConnectable}
        />
      </div>
    </>
  );
};

// Task.displayName = "Task";

export default memo(Task);
// export default Task;
