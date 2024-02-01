import "./style.scss";

import React from "react";
import { useState } from "react";

import { nodeImageSrc } from "../../../assets/nodes";
import { linkImageSrc } from "../../../assets/links";
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
          <p className="panel__nodes__title__name">nodes</p>
          <p className="panel__nodes__title__tutorial">
            Click to check the node description or drag the node onto the board
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
          <p className="panel__links__title__name">{`${selectedLink} link`}</p>
        </div>
        <div className="panel__links__window">
          <img src={linkImageSrc(selectedLink)} alt={selectedLink} />
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
                {edgeType.toUpperCase().charAt(0)}
              </div>
            );
          })}
        </div>
      </div>
      <div className="panel__subtasks">
        <div className="panel__subtasks__title">
          <p className="panel__subtasks__title__name">sub tasks</p>
        </div>
        <div className="panel__subtasks__content">
          <button className="panel__subtasks__content__button">
            <span className="iconfont">&#xe626;</span>
            <p>Generic Task</p>
          </button>
          <button className="panel__subtasks__content__button">
            <span className="iconfont">&#xe626;</span>
            <p>Predefined Task</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Panel;
