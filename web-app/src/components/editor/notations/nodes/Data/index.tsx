// import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const Data = ({
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
        width="51px"
        height="41px"
        viewBox="-0.5 -0.5 51 41"
      >
        <defs />
        <g>
          <path
            d="M 0 0 L 38 0 L 50 12 L 50 40 L 0 40 L 0 0 Z"
            fill="none"
            stroke="rgb(0, 0, 0)"
            stroke-miterlimit="10"
            pointer-events="all"
          />
          <path
            d="M 38 0 L 38 12 L 50 12 Z"
            fill-opacity="0.05"
            fill="#000000"
            stroke="none"
            pointer-events="all"
          />
          <path
            d="M 38 0 L 38 12 L 50 12"
            fill="none"
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

// export default memo(EventStart);
export default Data;
