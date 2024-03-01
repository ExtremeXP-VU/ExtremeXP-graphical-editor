import { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

const EventEnd = ({
  data,
  isConnectable,
  targetPosition = Position.Top,
}: NodeProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="32px"
        height="32px"
        viewBox="-0.5 -0.5 32 32"
      >
        <defs />
        <g>
          <ellipse
            cx="15"
            cy="15"
            rx="14.999999999999998"
            ry="14.999999999999998"
            fill="#000000"
            stroke="rgb(0, 0, 0)"
            pointerEvents="all"
          />
          <ellipse
            cx="15"
            cy="15"
            rx="13"
            ry="13"
            fill="#000000"
            stroke="#ffffff"
            strokeWidth="3"
            pointerEvents="all"
          />
        </g>
      </svg>
      <Handle
        type="target"
        position={targetPosition}
        isConnectable={isConnectable}
      />
      {data?.label}
    </>
  );
};

EventEnd.displayName = 'EventEnd';

export default memo(EventEnd);
// export default EventEnd;
