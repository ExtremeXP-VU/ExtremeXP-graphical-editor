import React, { useState, useRef, useCallback } from "react";
import Header from "../../components/editor/Header";
import Panel from "../../components/editor/Panel";
import SideBar from "../../components/editor/SideBar";

import ReactFlow, {
  ReactFlowProvider,
  Edge,
  Connection,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
} from "reactflow";

import "reactflow/dist/style.css";
import "./style.scss";

import EventStart from "../../components/editor/notations/nodes/EventStart";
import EventEnd from "../../components/editor/notations/nodes/EventEnd";
import Task from "../../components/editor/notations/nodes/Task";
import Data from "../../components/editor/notations/nodes/Data";

import RegularLink from "../../components/editor/notations/edges/RegularLink";
import ConditionalLink from "../../components/editor/notations/edges/ConditionalLink";
import ExceptionalLink from "../../components/editor/notations/edges/ExceptionalLink";
import DataflowLink from "../../components/editor/notations/edges/DataflowLink";
import Markers from "../../components/editor/notations/edges/Markers";

import linkProps from "../../components/editor/notations/notationConfigs/linkProps.json";

const diagramString =
  localStorage.getItem("diagram") || JSON.stringify({ nodes: [], edges: [] });
const diagram = JSON.parse(diagramString);

const initialNodes = diagram.nodes;
const initialEdges: Edge[] = diagram.edges;

const nodeTypes = {
  start: EventStart,
  end: EventEnd,
  task: Task,
  data: Data,
};

const edgeTypes = {
  regular: RegularLink,
  conditional: ConditionalLink,
  exceptional: ExceptionalLink,
  dataflow: DataflowLink,
};

const getId = (nodes: any) => {
  if (nodes.length === 0) {
    return `0`;
  }
  const ids = nodes.map((node) => node.id);
  const maxId = Math.max(...ids);
  return `${maxId + 1}`;
};

const Editor = () => {
  // const reactFlowWrapper = useRef(null);
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
        id: getId(nodes),
        type,
        position,
        data: { label: "" },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, nodes]
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
            <Markers />
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
