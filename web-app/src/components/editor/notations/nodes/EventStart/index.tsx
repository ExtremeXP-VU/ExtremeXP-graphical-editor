import { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

const EventStart = ({
  data,
  isConnectable,
  sourcePosition = Position.Bottom,
}: NodeProps) => {
  return (
    <>
      {/* <Handle
        type="target"
        position={targetPosition}
        isConnectable={isConnectable}
      /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="31px"
        height="31px"
        viewBox="-0.5 -0.5 31 31"
      >
        <defs />
        <g>
          <ellipse
            cx="15"
            cy="15"
            rx="15"
            ry="15"
            fill="#000000"
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
    </>
  );
};

EventStart.displayName = 'EventStart';

export default memo(EventStart);
// export default EventStart;
