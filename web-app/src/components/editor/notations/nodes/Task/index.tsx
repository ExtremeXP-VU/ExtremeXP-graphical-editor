import "./style.scss";
import { memo, useState } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const Task = ({
  data,
  isConnectable,
  sourcePosition = Position.Bottom,
  targetPosition = Position.Top,
}: NodeProps) => {
  const [operation, setOperation] = useState(data.operation);

  return (
    <>
      <div className="node-task">
        <p className="node-task__title">Compute</p>
        <label className="node-task__label">
          <select
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
