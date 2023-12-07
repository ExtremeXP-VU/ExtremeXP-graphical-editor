// import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const Task = ({
  data,
  isConnectable,
  sourcePosition = Position.Bottom,
  targetPosition = Position.Top,
}: NodeProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="101px"
        height="51px"
        viewBox="-0.5 -0.5 101 51"
      >
        <defs />
        <g>
          <rect
            x="0"
            y="0"
            width="100"
            height="50"
            rx="7.5"
            ry="7.5"
            fill="none"
            stroke="rgb(0, 0, 0)"
            pointerEvents="all"
          />
        </g>
      </svg>
      {data?.label}
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
    </>
  );
};

// Task.displayName = "Task";

// export default memo(EventStart);
export default Task;
