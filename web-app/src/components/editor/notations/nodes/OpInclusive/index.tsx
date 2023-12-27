import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const OpInclusive = ({
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
        width="41px"
        height="41px"
        viewBox="-0.5 -0.5 41 41"
      >
        <defs />
        <g>
          <path
            d="M 20 0 L 40 20 L 20 40 L 0 20 Z"
            fill="none"
            stroke="rgb(0, 0, 0)"
            strokeMiterlimit="10"
            pointerEvents="all"
          />
          <ellipse
            cx="20"
            cy="20"
            rx="9"
            ry="9"
            fill="none"
            stroke="rgb(0, 0, 0)"
            strokeWidth="3"
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

export default memo(OpInclusive);
