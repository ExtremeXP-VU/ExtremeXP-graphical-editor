import { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
// import {
//   useConfigOperatorPanelStore,
//   useConfigPanelStore,
// } from '../../../../../stores/configPanelStore';
// import { useReactFlowInstanceStore } from '../../../../../stores/reactFlowInstanceStore';

const handleLeftSourceStyle = {
  bottom: '-4px',
  left: '-7px',
  background: '#c3c3c3',
};
const handleLeftTargetStyle = {
  top: '15px',
  left: '-7px',
  background: '#c3c3c3',
};
const handleRightSourceStyle = {
  bottom: '-4px',
  right: '-7px',
  background: '#c3c3c3',
};
const handleRightTargetStyle = {
  top: '15px',
  right: '-7px',
  background: '#c3c3c3',
};

const OpInclusive = ({
  isConnectable,
  sourcePosition = Position.Bottom,
  targetPosition = Position.Top,
}: NodeProps) => {
  // const selectedOperatorData = useConfigOperatorPanelStore(
  //   (state) => state.selectedOperatorData
  // );
  // const selectedNodeId = useConfigPanelStore((state) => state.selectedNodeId);
  // const nodes = useReactFlowInstanceStore((state) => state.nodes);
  // useEffect(() => {
  //   const selectedNode = nodes.find((node) => node.id === selectedNodeId);
  //   if (selectedNode?.type === 'opInclusive') {
  //     selectedNode.data = selectedOperatorData;
  //   }
  // }, [selectedNodeId, selectedOperatorData]);

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
      <Handle
        type="source"
        position={sourcePosition}
        isConnectable={isConnectable}
        id="s-bottom"
      />

      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        style={handleRightSourceStyle}
        id="s-right"
      />
      <Handle
        type="source"
        position={Position.Left}
        isConnectable={isConnectable}
        style={handleLeftSourceStyle}
        id="s-left"
      />

      <Handle
        type="target"
        position={targetPosition}
        isConnectable={isConnectable}
        id="t-top"
      />
      <Handle
        type="target"
        position={Position.Right}
        isConnectable={isConnectable}
        style={handleRightTargetStyle}
        id="t-right"
      />
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        style={handleLeftTargetStyle}
        id="t-left"
      />
    </>
  );
};

export default memo(OpInclusive);
