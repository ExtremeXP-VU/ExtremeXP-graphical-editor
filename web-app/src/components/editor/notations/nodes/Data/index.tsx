import './style.scss';
import { memo, useState } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

const Data = ({
  data,
  isConnectable,
  sourcePosition = Position.Bottom,
  targetPosition = Position.Top,
}: NodeProps) => {
  const [name, setName] = useState(data.name);
  const [field, setField] = useState(data.field);

  return (
    <>
      <div className="node-data">
        <label className="node-data__name">
          <p className="node-data__title">URI</p>
          <input
            className="node-data__input nodrag"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              data.name = e.target.value;
            }}
          />
        </label>
        <label className="node-data__field">
          <p className="node-data__title">Fields</p>
          <input
            className="node-data__input nodrag"
            type="text"
            placeholder='use "," to separate fields'
            value={field}
            onChange={(e) => {
              setField(e.target.value);
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
