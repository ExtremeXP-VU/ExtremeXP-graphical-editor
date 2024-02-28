import { memo } from "react";
import { BaseEdge, EdgeProps, getSmoothStepPath } from "reactflow";
import EdgeLabel from "./EdgeLabel";

function ConditionalLink(props: EdgeProps) {
  const {
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    data,
  } = props;

  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

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
    </>
  );
}

export default memo(ConditionalLink);
