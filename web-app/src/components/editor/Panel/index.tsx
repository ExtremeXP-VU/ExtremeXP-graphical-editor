import "./style.scss";

import React from "react";
import { useState } from "react";

import { nodeImageSrc } from "../../../assets/nodes";
import {
  LinksPropsType,
  notationList,
} from "../notations/notationConfigs/linkProps";

interface PanelProps {
  selectedLink: string;
  onLinkSelection: (linkType: LinksPropsType) => void;
}

const nodesList = notationList.nodes;
const edgesList = notationList.edges;

const Panel: React.FC<PanelProps> = ({ selectedLink, onLinkSelection }) => {
  const [windowNode, setWindowNode] = useState("start");

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    setWindowNode(nodeType);
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const handleLinkSelection = (linkType: LinksPropsType) => {
    onLinkSelection(linkType);
  };

  return (
    <div className="panel">
      <div className="panel__info">
        <div className="panel__info__window">
          <div className="panel__info__window__notation">
            <img src={nodeImageSrc(windowNode)} alt={windowNode} />
          </div>
          <div className="panel__info__window__title">
            <p>{windowNode}</p>
          </div>
        </div>
        <div className="panel__info__description">
          <p>{windowNode} node description:</p>
        </div>
      </div>
      <div className="panel__nodes">
        <div className="panel__nodes__title">
          <p className="panel__nodes__title__name">Nodes</p>
          <p className="panel__nodes__title__tutorial">
            Click to show the node description or drag the node onto the board
            on the right.
          </p>
        </div>
        <div className="panel__nodes__content">
          {nodesList.map((nodeType, index) => {
            return (
              <div
                key={index}
                className="panel__nodes__content__node"
                onDragStart={(event) => onDragStart(event, nodeType)}
                draggable
                onClick={() => {
                  setWindowNode(nodeType);
                }}
              >
                <img src={nodeImageSrc(nodeType)} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="panel__links">
        <div className="panel__links__title">
          <p className="panel__links__title__name">Links</p>
          <p className="panel__links__title__tutorial">
            Click to select the link type to connect between nodes.
          </p>
        </div>
        <div className="panel__links__content">
          {edgesList.map((edgeType, index) => {
            return (
              <div
                key={index}
                className={`panel__links__content__link ${
                  selectedLink === edgeType ? "selected" : ""
                }`}
                onClick={() => {
                  handleLinkSelection(edgeType as LinksPropsType);
                }}
              >
                {edgeType}
              </div>
            );
          })}
        </div>
      </div>
      <div className="panel__ui">
        <div>UI elements</div>
      </div>
    </div>
  );
};

export default Panel;
