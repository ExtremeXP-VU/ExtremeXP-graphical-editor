import "reactflow/dist/style.css";
import "./style.scss";

import React, { useState, useEffect, useCallback } from "react";

import ReactFlow, {
  ReactFlowProvider,
  ReactFlowInstance,
  Controls,
  Background,
  // MiniMap,
} from "reactflow";

import { shallow } from "zustand/shallow";
import {
  useReactFlowInstanceStore,
  RFState,
} from "../../stores/reactFlowInstanceStore";

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
  ExecutionResponseType,
} from "../../types/requests";

import Markers from "../../components/editor/notations/edges/Markers";
import { nodeTypes, edgeTypes } from "./notationTypes";

const selector = (state: RFState) => ({
  selectedLink: state.selectedLink,
  nodes: state.nodes,
  edges: state.edges,
  setSelectedLink: state.setSelectedLink,
  setNodes: state.setNodes,
  setEdges: state.setEdges,
  addNode: state.addNode,
  onConnect: state.onConnect,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onDragOver: state.onDragOver,
});

const Editor = () => {
  // const reactFlowWrapper = useRef(null);
  const { request: specificationRequest } =
    useRequest<SpecificationResponseType>();

  const { request: updateGraphRequest } =
    useRequest<UpdateGraphicalModelResponseType>();

  const { request: createSpecRequest } =
    useRequest<CreateSpecificationResponseType>();

  // FIXME: Temporary Execution Demo
  const { request: executionRequest } = useRequest<ExecutionResponseType>();

  const {
    selectedLink,
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    setSelectedLink,
    setNodes,
    setEdges,
    addNode,
    onConnect,
    onDragOver,
  } = useReactFlowInstanceStore(selector, shallow);

  const navigate = useNavigate();

  const [specification, setSpecification] = useState(defaultSpecification);
  const [graphicalModel, setGraphicalModel] = useState(defaultGraphicalModel);

  const expID = useLocation().pathname.split("/")[2];
  const specificaitonID = useLocation().pathname.split("/")[3];

  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>(Object);
  // const {screenToFlowPosition} = useReactFlow();

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
      addNode(type, position);
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

  // FIXEME: duplicated code
  function handleExecution() {
    const graphicalModel = { nodes, edges };
    executionRequest({
      url: `/exp/experiments/${expID}/specifications/${specificaitonID}/execution`,
      method: "POST",
      data: {
        graphical_model: graphicalModel,
      },
    })
      .then((data) => {
        if (data.data.result) {
          alert(`The execution result is: ${data.data.result}`);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.message) {
          message(error.response.data.message);
        } else if (error.message) {
          message(error.message);
        }
      });
  }

  return (
    <div className="editor">
      <div className="editor__top">
        <Header
          onExecution={handleExecution}
          onSave={handleSave}
          onSaveAs={handleShowPopover}
        />
      </div>
      <ReactFlowProvider>
        <div className="editor__bottom">
          <div className="editor__bottom__left">
            <Panel
              selectedLink={selectedLink}
              onLinkSelection={setSelectedLink}
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
              {/* <MiniMap /> */}
              <Background />
            </ReactFlow>
          </div>
          {/* <div className="editor__bottom__right">
            <SideBar
              
            />
          </div> */}
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
