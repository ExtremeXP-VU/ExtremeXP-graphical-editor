import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const OpComplex = ({
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
        width="42px"
        height="42px"
        viewBox="-0.5 -0.5 42 42"
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
          <path
            d="M 8.75 18.68 L 18.68 18.68 L 18.68 8.75 L 21.32 8.75 L 21.32 18.68 L 31.25 18.68 L 31.25 21.32 L 21.32 21.32 L 21.32 31.25 L 18.68 31.25 L 18.68 21.32 L 8.75 21.32 Z"
            fill="#000000"
            stroke="rgb(0, 0, 0)"
            strokeMiterlimit="10"
            pointerEvents="all"
          />
          <path
            d="M 8.75 18.68 L 18.68 18.68 L 18.68 8.75 L 21.32 8.75 L 21.32 18.68 L 31.25 18.68 L 31.25 21.32 L 21.32 21.32 L 21.32 31.25 L 18.68 31.25 L 18.68 21.32 L 8.75 21.32 Z"
            fill="#000000"
            stroke="rgb(0, 0, 0)"
            strokeMiterlimit="10"
            transform="rotate(45,20,20)"
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

export default memo(OpComplex);
