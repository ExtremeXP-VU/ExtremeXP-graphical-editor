import "./style.scss";
import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const Data = ({
  data,
  isConnectable,
  sourcePosition = Position.Bottom,
  targetPosition = Position.Top,
}: NodeProps) => {
  return (
    <>
      <div className="node-data">
        <label className="node-data__name">
          <p className="node-data__title">Name</p>
          <input
            className="node-data__input nodrag"
            type="text"
            value={data.name}
            onChange={(e) => {
              data.name = e.target.value;
            }}
          />
        </label>
        <label className="node-data__field">
          <p className="node-data__title">Field</p>
          <input
            className="node-data__input nodrag"
            type="text"
            value={data.field}
            onChange={(e) => {
              data.field = e.target.value;
            }}
          />
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

export default memo(Data);
