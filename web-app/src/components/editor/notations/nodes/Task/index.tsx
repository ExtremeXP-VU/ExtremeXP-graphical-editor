import "./style.scss";
import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const Task = ({
  data,
  isConnectable,
  sourcePosition = Position.Bottom,
  targetPosition = Position.Top,
}: NodeProps) => {
  return (
    <>
      <div className="node-task">
        <p className="node-task__title">Operation</p>
        <label className="node-task__label">
          <select
            className="node-task__label__selector nodrag"
            value={data.operation}
            onChange={(e) => {
              data.operation = e.target.value;
            }}
          >
            <option value="mean">mean</option>
            <option value="sum">sum</option>
          </select>
        </label>
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
