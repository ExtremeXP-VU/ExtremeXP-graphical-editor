export const linkProps = {
  regular: {
    type: "regular",
    style: { stroke: "#000", strokeWidth: 1.5 },
    markerEnd: {
      type: "arrow",
      width: 20,
      height: 20,
      color: "#000",
    },
  },
  conditional: {
    type: "conditional",
    style: { stroke: "#000", strokeWidth: 1.5 },
    markerStart: "diamondMarker",
    markerEnd: {
      type: "arrow",
      width: 20,
      height: 20,
      color: "#000",
    },
  },
  exceptional: {
    type: "exceptional",
    style: { stroke: "#000", strokeWidth: 1.5 },
    markerStart: "squareMarker",
    markerEnd: {
      type: "arrow",
      width: 20,
      height: 20,
      color: "#000",
    },
  },
  dataflow: {
    type: "dataflow",
    style: { stroke: "#3d97b0aa", strokeWidth: 1.5 },
    animated: true,
    markerEnd: {
      type: "arrow",
      width: 20,
      height: 20,
      color: "#3d97b0aa",
    },
  },
};
