export default function Markers() {
  return (
    <>
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute', overflow: 'visible' }}
      >
        <marker
          id="diamondMarker"
          viewBox="0 0 20 10"
          refX="5"
          refY="5"
          markerWidth="12"
          markerHeight="6"
          orient="auto"
        >
          <path
            d="M 10,0 20,5 10,10 0,5 ZZ"
            fill="white"
            stroke="black"
            strokeWidth="1.5"
          />
        </marker>
      </svg>
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute', overflow: 'visible' }}
      >
        <marker
          id="squareMarker"
          viewBox="0 0 20 20"
          refX="5"
          refY="10"
          markerWidth="12"
          markerHeight="12"
          orient="auto"
        >
          <rect
            x="2"
            y="2"
            width="16"
            height="16"
            fill="white"
            stroke="black"
          />

          <line
            x1="4"
            y1="10"
            x2="16"
            y2="10"
            stroke="black"
            transform="rotate(45 10 10)"
          />
          <line
            x1="10"
            y1="4"
            x2="10"
            y2="16"
            stroke="black"
            transform="rotate(45 10 10)"
          />
        </marker>
      </svg>
    </>
  );
}
