import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const Subflow = ({
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
        width="81px"
        height="52px"
        viewBox="-0.5 -0.5 81 52"
      >
        <defs />
        <g>
          <rect
            x="0"
            y="0"
            width="80"
            height="50"
            rx="7.5"
            ry="7.5"
            fill="none"
            stroke="rgb(0, 0, 0)"
            pointerEvents="all"
          />
          <rect
            x="33"
            y="36"
            width="14"
            height="14"
            fill="rgb(255, 255, 255)"
            stroke="rgb(0, 0, 0)"
            pointerEvents="all"
          />
          <path
            d="M 35 42.68 L 39.68 42.68 L 39.68 38 L 40.32 38 L 40.32 42.68 L 45 42.68 L 45 43.32 L 40.32 43.32 L 40.32 48 L 39.68 48 L 39.68 43.32 L 35 43.32 Z"
            fill="#000000"
            stroke="rgb(0, 0, 0)"
            strokeMiterlimit="10"
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

export default memo(Subflow);
