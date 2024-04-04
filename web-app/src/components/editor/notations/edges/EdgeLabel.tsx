import './style.scss';
import { EdgeLabelRenderer } from 'reactflow';
import React, { useState } from 'react';

interface EdgeLabelProps {
  labelX: number;
  labelY: number;
  label: string;
  onLabelChange: (newLabel: string) => void;
}

const EdgeLabel: React.FC<EdgeLabelProps> = ({
  labelX,
  labelY,
  label,
  onLabelChange,
}) => {
  const [editable, setEditable] = useState(false);
  const [labelText, setLabelText] = useState(label);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setEditable(false);
      onLabelChange(labelText);
    }
  };

  const handleAddLabel = () => {
    setEditable(true);
    setLabelText('label');
  };

  return (
    <>
      {labelText || editable ? (
        <EdgeLabelRenderer>
          <div
            style={{
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            }}
            className="nodrag nopan edge__label__text"
            onClick={() => setEditable(true)}
          >
            {editable && (
              <input
                value={labelText}
                onChange={(e) => {
                  setLabelText(e.target.value);
                  label = e.target.value;
                }}
                onKeyUp={handleKeyPress}
              />
            )}
            {!editable && <span>{labelText}</span>}
          </div>
        </EdgeLabelRenderer>
      ) : (
        <EdgeLabelRenderer>
          <div
            style={{
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            }}
            className="nodrag nopan iconfont edge__label__icon"
            onClick={handleAddLabel}
          >
            &#xe617;
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
};

export default EdgeLabel;
