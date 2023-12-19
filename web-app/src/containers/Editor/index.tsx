import "reactflow/dist/style.css";
import "./style.scss";

import ReactFlow, {
  ReactFlowProvider,
  Node,
  Edge,
  Connection,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
} from "reactflow";

import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { message } from "../../utils/message";
import {
  SpecificationType,
  defaultGraphicalModel,
  defaultSpecification,
} from "../../types/experiment";

import Header from "../../components/editor/Header";
import Panel from "../../components/editor/Panel";
import SideBar from "../../components/editor/SideBar";

import EventStart from "../../components/editor/notations/nodes/EventStart";
import EventEnd from "../../components/editor/notations/nodes/EventEnd";
import Task from "../../components/editor/notations/nodes/Task";
import Data from "../../components/editor/notations/nodes/Data";

import RegularLink from "../../components/editor/notations/edges/RegularLink";
import ConditionalLink from "../../components/editor/notations/edges/ConditionalLink";
import ExceptionalLink from "../../components/editor/notations/edges/ExceptionalLink";
import DataflowLink from "../../components/editor/notations/edges/DataflowLink";
import Markers from "../../components/editor/notations/edges/Markers";

import { linkProps } from "../../components/editor/notations/notationConfigs/linkProps";

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

type ResponseType = {
  message: string;
  data: {
    specification: SpecificationType;
  };
};

type LinksPropsType = keyof typeof linkProps;

const Editor = () => {
  // const reactFlowWrapper = useRef(null);
  const { request } = useRequest<ResponseType>();
  const [specification, setSpecification] = useState(defaultSpecification);
  const [graphicalModel, setGraphicalModel] = useState(defaultGraphicalModel);

  const expID = useLocation().pathname.split("/")[2];
  const specificaitonID = useLocation().pathname.split("/")[3];

  const [selectedLink, setSelectedLink] = useState<LinksPropsType>("regular");

  const [nodes, setNodes, onNodesChange] = useNodesState(graphicalModel.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(graphicalModel.edges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  useEffect(() => {
    request({
      url: `exp/experiments/specifications/${specificaitonID}`,
    })
      .then((data) => {
        if (data.data.specification) {
          const newSpecification = data.data.specification;
          setSpecification(newSpecification);
        }
      })
      .catch((error) => {
        if (error.message) {
          message(error.message);
        }
      });
  }, []);

  useEffect(() => {
    setGraphicalModel(specification.graphical_model);
  }, [specification]);

  useEffect(() => {
    setNodes(graphicalModel.nodes);
    setEdges(graphicalModel.edges);
  }, [graphicalModel]);

  const handleLinkSelection = (linkType: LinksPropsType) => {
    setSelectedLink(linkType);
  };

  const getId = (nodes: Node[]) => {
    if (nodes.length === 0) {
      return `0`;
    }
    const maxId = Math.max(...nodes.map((node) => parseInt(node.id)));
    return `${maxId + 1}`;
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
            ...(getLinkProps() as Edge),
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
    const graphicalModel = { nodes, edges };
    request({
      url: `/exp/experiments/${expID}/specifications/${specificaitonID}/update/graphical_model`,
      method: "PUT",
      data: {
        graphical_model: graphicalModel,
      },
    })
      .then(() => {
        message("Saved");
      })
      .catch((error) => {
        if (error.message) {
          message(error.message);
        }
      });
  }, [nodes, edges, request, expID, specificaitonID]);

  return (
    <div className="editor">
      <div className="editor__top">
        <Header specName={specification.name} />
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
