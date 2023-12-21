import "reactflow/dist/style.css";
import "./style.scss";

import ReactFlow, {
  ReactFlowProvider,
  ReactFlowInstance,
  Node,
  Edge,
  Connection,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MiniMap,
} from "reactflow";

import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { message } from "../../utils/message";

import Header from "../../components/editor/Header";
import Panel from "../../components/editor/Panel";
import SideBar from "../../components/editor/SideBar";
import Popover from "../../components/general/Popover";

import {
  defaultGraphicalModel,
  defaultSpecification,
} from "../../types/experiment";

import {
  SpecificationResponseType,
  UpdateGraphicalModelResponseType,
  CreateSpecificationResponseType,
} from "../../types/requests";

import Markers from "../../components/editor/notations/edges/Markers";
import { nodeTypes, edgeTypes } from "./notationTypes";
import {
  linkProps,
  LinksPropsType,
} from "../../components/editor/notations/notationConfigs/linkProps";

const Editor = () => {
  // const reactFlowWrapper = useRef(null);
  const { request: specificationRequest } =
    useRequest<SpecificationResponseType>();

  const { request: updateGraphRequest } =
    useRequest<UpdateGraphicalModelResponseType>();

  const { request: createSpecRequest } =
    useRequest<CreateSpecificationResponseType>();

  const navigate = useNavigate();

  const [specification, setSpecification] = useState(defaultSpecification);
  const [graphicalModel, setGraphicalModel] = useState(defaultGraphicalModel);

  const expID = useLocation().pathname.split("/")[2];
  const specificaitonID = useLocation().pathname.split("/")[3];

  const [selectedLink, setSelectedLink] = useState<LinksPropsType>("regular");

  const [nodes, setNodes, onNodesChange] = useNodesState(graphicalModel.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(graphicalModel.edges);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>(Object);

  const [showPopover, setShowPopover] = useState(false);
  const [newSpecName, setNewSpecName] = useState("");

  useEffect(() => {
    specificationRequest({
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
        handleSave();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [nodes, edges]);

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

  function updateGraphicalModel() {
    const graphicalModel = { nodes, edges };
    updateGraphRequest({
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
  }

  const handleSave = () => {
    updateGraphicalModel();
  };

  const handleShowPopover = () => {
    setShowPopover(true);
    setNewSpecName(specification.name);
  };

  function closeMask() {
    setShowPopover(false);
  }

  function handleCancelSave() {
    setShowPopover(false);
  }

  function handleSaveAs() {
    closeMask();
    const graphicalModel = { nodes, edges };
    createSpecRequest({
      url: `/exp/experiments/${expID}/specifications/create`,
      method: "POST",
      data: {
        spec_name: newSpecName,
        graphical_model: graphicalModel,
      },
    })
      .then((data) => {
        const specID = data.data.id_specification;
        navigate(`/editor/${expID}/${specID}`);
        window.location.reload();
      })
      .catch((error) => {
        if (error.message) {
          message(error.message);
        }
      });
  }

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
              <MiniMap />
              <Background />
            </ReactFlow>
          </div>
          <div className="editor__bottom__right">
            <SideBar onSave={handleSave} onSaveAs={handleShowPopover} />
          </div>
        </div>
      </ReactFlowProvider>
      <Popover show={showPopover} blankClickCallback={closeMask}>
        <div className="popover__save">
          <div className="popover__save__text">
            Save as a new specification?
          </div>
          <input
            type="text"
            className="popover__save__input"
            placeholder="specification name"
            value={newSpecName}
            onChange={(e) => setNewSpecName(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleSaveAs();
              }
            }}
          />
          <div className="popover__save__buttons">
            <button
              className="popover__save__buttons__cancel"
              onClick={handleCancelSave}
            >
              cancel
            </button>
            <button
              className="popover__save__buttons__confirm"
              onClick={handleSaveAs}
            >
              confirm
            </button>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default Editor;
