import React, { useState, useRef, useCallback, useEffect } from "react";
import Header from "../../components/editor/Header";
import Panel from "../../components/editor/Panel";
import SideBar from "../../components/editor/SideBar";

import ReactFlow, {
  ReactFlowProvider,
  Node,
  Edge,
  MarkerType,
  Connection,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
} from "reactflow";

import "reactflow/dist/style.css";
import "./style.scss";

import EventStart from "../../notations/nodes/EventStart";
import EventEnd from "../../notations/nodes/EventEnd";
import Task from "../../notations/nodes/Task";

import RegularLink from "../../notations/edges/RegularLink";
import ConditionalLink from "../../notations/edges/ConditionalLink";
import ExceptionalLink from "../../notations/edges/ExceptionalLink";
import DataflowLink from "../../notations/edges/DataflowLink";

import linkProps from "../../notations/edges/linkProps.json";

const diagramString =
  localStorage.getItem("diagram") || JSON.stringify({ nodes: [], edges: [] });
const diagram = JSON.parse(diagramString);

const initialNodes = diagram.nodes;
const initialEdges: Edge[] = diagram.edges;

const nodeTypes = {
  start: EventStart,
  end: EventEnd,
  task: Task,
};

const edgeTypes = {
  regular: RegularLink,
  conditional: ConditionalLink,
  exceptional: ExceptionalLink,
  dataflow: DataflowLink,
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const Editor = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const [selectedLink, setSelectedLink] = useState("regular");

  const handleLinkSelection = (linkType: string) => {
    setSelectedLink(linkType);
  };

  const getLinkProps = useCallback(() => {
    const props = linkProps[selectedLink];
    return props;
  }, [selectedLink]);

  const onConnect = useCallback(
    (params: Edge | Connection) => {
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            ...getLinkProps(),
          },
          eds
        )
      );
    },
    [setEdges, getLinkProps]
  );

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      // reactFlowInstance.project was renamed to reactFlowInstance.screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: "" },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const handleSave = useCallback(() => {
    console.log("save");
    const diagram = { nodes, edges };
    localStorage.setItem("diagram", JSON.stringify(diagram));
  }, [nodes, edges]);

  return (
    <div className="editor">
      <div className="editor__top">
        <Header />
      </div>
      <ReactFlowProvider>
        <div className="editor__bottom">
          <div className="editor__bottom__left">
            <Panel
              selectedLink={selectedLink}
              onLinkSelection={handleLinkSelection}
            />
          </div>
          <div className="editor__bottom__middle">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              edgeTypes={edgeTypes}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
            >
              <Controls />
              <Background />
            </ReactFlow>
          </div>
          <div className="editor__bottom__right">
            <SideBar onSave={handleSave} />
          </div>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default Editor;
