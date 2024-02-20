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
import Popover from "../../components/general/Popover";

import {
  defaultGraphicalModel,
  defaultExperiment,
  ExperimentType,
} from "../../types/experiment";

import { TaskType } from "../../types/task";

import {
  TaskResponseType,
  ExperimentResponseType,
  UpdateGraphicalModelResponseType,
  CreateExperimentResponseType,
  CreateTaskResponseType,
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
  const { request: specificationRequest } = useRequest<
    ExperimentResponseType | TaskResponseType
  >();

  const { request: updateGraphRequest } =
    useRequest<UpdateGraphicalModelResponseType>();

  const { request: createNewSpecRequest } = useRequest<
    CreateExperimentResponseType | CreateTaskResponseType
  >();

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

  const [experiment, setExperiment] = useState<ExperimentType | TaskType>(
    defaultExperiment
  );
  const [graphicalModel, setGraphicalModel] = useState(defaultGraphicalModel);

  const specificationType = useLocation().pathname.split("/")[2];
  const projID = useLocation().pathname.split("/")[3];
  const experimentID = useLocation().pathname.split("/")[4];

  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>(Object);
  // const {screenToFlowPosition} = useReactFlow();

  const [showPopover, setShowPopover] = useState(false);
  const [newExpName, setNewExpName] = useState("");

  useEffect(() => {
    let url = "";
    specificationType === "experiment"
      ? (url = `exp/projects/experiments/${experimentID}`)
      : (url = `task/categories/tasks/${experimentID}`);

    specificationRequest({
      url: url,
    })
      .then((data) => {
        let newExperiment: ExperimentType | TaskType = defaultExperiment;
        if (specificationType === "experiment") {
          if ("experiment" in data.data) {
            newExperiment = data.data.experiment;
          }
        } else {
          if ("task" in data.data) {
            newExperiment = data.data.task;
          }
        }
        setExperiment(newExperiment);
      })
      .catch((error) => {
        if (error.message) {
          message(error.message);
        }
      });
  }, []);

  useEffect(() => {
    setGraphicalModel(experiment.graphical_model);
  }, [experiment]);

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
      console.log(event.dataTransfer.getData("application/reactflow"));
      const { nodeType, data } = JSON.parse(
        event.dataTransfer.getData("application/reactflow")
      );
      // check if the dropped element is valid
      if (typeof nodeType === "undefined" || !nodeType) {
        return;
      }
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      addNode(nodeType, position, data);
    },
    [reactFlowInstance, nodes]
  );

  function updateGraphicalModel() {
    const graphicalModel = { nodes, edges };
    let url = "";
    specificationType === "experiment"
      ? (url = `/exp/projects/${projID}/experiments/${experimentID}/update/graphical_model`)
      : (url = `/task/categories/tasks/${experimentID}/update/graphical_model`);
    updateGraphRequest({
      url: url,
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
    setNewExpName(experiment.name);
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
    let url = "";
    specificationType === "experiment"
      ? (url = `/exp/projects/${projID}/experiments/create`)
      : (url = `/task/categories/${projID}/tasks/create`);

    let data = {};
    if (specificationType === "experiment") {
      data = {
        exp_name: newExpName,
        graphical_model: graphicalModel,
      };
    } else {
      data = {
        name: newExpName,
        provider: (experiment as TaskType).provider,
        graphical_model: graphicalModel,
      };
    }

    createNewSpecRequest({
      url: url,
      method: "POST",
      data: data,
    })
      .then((data) => {
        let specID = "";
        if ("id_experiment" in data.data) {
          specID = data.data.id_experiment;
        } else if ("id_task" in data.data) {
          specID = data.data.id_task;
        }
        navigate(`/editor/${specificationType}/${projID}/${specID}`);
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
      url: `/exp/experiments/${projID}/specifications/${experimentID}/execution`,
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
            {` Save the current specification as a new ${specificationType}`}
          </div>
          <input
            type="text"
            className="popover__save__input"
            placeholder="specification name"
            value={newExpName}
            onChange={(e) => setNewExpName(e.target.value)}
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
