import { memo, useEffect, useState } from 'react';
import { BaseEdge, EdgeProps, getSmoothStepPath } from 'reactflow';
import EdgeLabel from './EdgeLabel';
import { EdgeLabelRenderer } from 'reactflow';
import { useConfigPanelStore } from '../../../../stores/configPanelStore';

function ExceptionalLink(props: EdgeProps) {
  const {
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    data,
    id,
  } = props;

  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const [selected, setSelected] = useState(false);
  const [linkIndex, setLinkIndex] = useState(-1);

  const outgoingLinks = useConfigPanelStore((state) => state.outgoingLinks);

  useEffect(() => {
    setSelected(false);
    outgoingLinks.forEach((link) => {
      if (link.linkId === id) {
        setSelected(true);
        setLinkIndex(link.index);
      }
    });
  }, [outgoingLinks]);

  const handleLabelChange = (newLabel: string) => {
    data.label = newLabel;
  };

  return (
    <>
      <BaseEdge path={edgePath} {...props} />
      <EdgeLabel
        labelX={labelX}
        labelY={labelY}
        label={data.label}
        onLabelChange={handleLabelChange}
      />
      {selected && (
        <EdgeLabelRenderer>
          <div
            style={{
              transform: `translate(-50%, -20%) translate(${sourceX}px,${sourceY}px)`,
            }}
            className="nodrag nopan edge__label__marker"
          >
            {linkIndex}
          </div>

          <div
            style={{
              transform: `translate(-50%, -150%) translate(${targetX}px,${targetY}px)`,
            }}
            className="nodrag nopan edge__label__marker"
          >
            {linkIndex}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}

export default memo(ExceptionalLink);
