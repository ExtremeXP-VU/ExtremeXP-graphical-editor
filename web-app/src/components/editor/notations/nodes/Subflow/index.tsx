import "./style.scss";
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
      <div className="node-subflow">
        <div className="node-subflow__name">{data.name}</div>
        <div className="node-subflow__icon">
          <div className="node-subflow__icon__wrapper">
            <span className="iconfont">&#xe601;</span>
          </div>
        </div>
      </div>
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
