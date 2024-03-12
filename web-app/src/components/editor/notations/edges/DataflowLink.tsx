import { memo, useEffect, useState } from 'react';
import { BaseEdge, EdgeProps, getSmoothStepPath } from 'reactflow';
import EdgeLabel from './EdgeLabel';
import EdgeIndexMarker from './EdgeIndexMarker';
import { useConfigPanelStore } from '../../../../stores/configPanelStore';

function DataflowLink(props: EdgeProps) {
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
        <EdgeIndexMarker
          sourceX={sourceX}
          sourceY={sourceY}
          targetX={targetX}
          targetY={targetY}
          index={linkIndex}
        />
      )}
    </>
  );
}

export default memo(DataflowLink);
