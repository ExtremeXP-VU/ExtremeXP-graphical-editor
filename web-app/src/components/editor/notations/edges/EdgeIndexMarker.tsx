import './style.scss';
import { EdgeLabelRenderer } from 'reactflow';

interface EdgeIndexMarkerProps {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  index: number;
}

const EdgeIndexMarker: React.FC<EdgeIndexMarkerProps> = ({
  sourceX,
  sourceY,
  targetX,
  targetY,
  index,
}) => {
  return (
    <>
      <EdgeLabelRenderer>
        <div
          style={{
            transform: `translate(-50%, -20%) translate(${sourceX}px,${sourceY}px)`,
          }}
          className="nodrag nopan edge__label__marker"
        >
          {index}
        </div>

        <div
          style={{
            transform: `translate(-50%, -150%) translate(${targetX}px,${targetY}px)`,
          }}
          className="nodrag nopan edge__label__marker"
        >
          {index}
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

export default EdgeIndexMarker;
