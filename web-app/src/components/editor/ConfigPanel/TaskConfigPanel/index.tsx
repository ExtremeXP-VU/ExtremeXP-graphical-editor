import './style.scss';
import React, { useState, useCallback, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useImmerReducer } from 'use-immer';
import { taskConfigReducer, Action } from './reducer';

import { useConfigPanelStore } from '../../../../stores/configPanelStore';
import {
  useReactFlowInstanceStore,
  RFState,
} from '../../../../stores/reactFlowInstanceStore';
import { shallow } from 'zustand/shallow';
import { useCategoryStore } from '../../../../stores/categoryStore';
import {
  TaskVariantType,
  TaskType,
  genericTask,
  defaultTaskVariant,
  TaskParameterType,
  defaultParameter,
} from '../../../../types/task';

import { TasksResponseType } from '../../../../types/requests';
import useRequest from '../../../../hooks/useRequest';
import { message } from '../../../../utils/message';
import { removeTab } from '../../../../stores/tabStore';

import DropDown from '../SupportComponents/DropDown';
import RadioButton from '../SupportComponents/RadioButton';
import StaticTable from '../SupportComponents/StaticTable';
import CustomButton from '../SupportComponents/CustomButton';
import DynamicTable from '../SupportComponents/DynamicTable';

interface TaskConfigPanelProps {
  updateSideBar: () => void;
}

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  updateNodeData: state.updateNodeData,
  selectedNode: state.selectedNode,
  updateEdgeData: state.updateEdgeData,
});

const TaskConfigPanel: React.FC<TaskConfigPanelProps> = ({ updateSideBar }) => {
  // TODO: fetch task implementation references from the server
  const taskImpReferences: string[] = [
    'NoReference',
    'ReadData',
    'AddPadding',
    'SplitData',
    'TrainModel',
    'EvaluateModel',
  ];

  const { updateNodeData, selectedNode } = useReactFlowInstanceStore(
    selector,
    shallow
  );

  const selectedNodeId = useConfigPanelStore((state) => state.selectedNodeId);

  const currentTaskVariantId = selectedNode?.data.currentVariant;
  const currentTaskVariant: TaskVariantType = selectedNode?.data.variants.find(
    (variant: TaskVariantType) => variant.id_task === currentTaskVariantId
  );

  const [taskState, dispatch] = useImmerReducer(
    taskConfigReducer,
    currentTaskVariant
  );

  function updateSelectedNodeData(taskData: TaskVariantType) {
    updateNodeData(
      {
        ...selectedNode?.data,
        variants: selectedNode?.data?.variants.map(
          (variant: { id_task: string }) =>
            variant.id_task === taskData.id_task ? taskData : variant
        ),
      },
      selectedNodeId
    );
  }

  useEffect(() => {
    updateSelectedNodeData(taskState);
  }, [taskState]);

  const handleClosePanel = () => {
    useConfigPanelStore.getState().clearConfigStore();
  };

  // handle panel generic properties change
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const action: Action = { type: 'UPDATE_NAME', payload: event.target.value };
    dispatch(action);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const action: Action = {
      type: 'UPDATE_DESCRIPTION',
      payload: event.target.value,
    };
    dispatch(action);
  };

  const handleImplementationRefChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const action: Action = {
      type: 'UPDATE_IMPLEMENTATION_REF',
      payload: event.target.value,
    };
    dispatch(action);

    const actionName: Action = {
      type: 'UPDATE_NAME',
      payload: event.target.value,
    };
    dispatch(actionName);
  };

  // handle add parameter

  const handleAddParameter = () => {
    const id = 'parameter-' + nanoid();
    const newParam: TaskParameterType = {
      ...defaultParameter,
      id: id,
      name: 'New Parameter',
      type: 'integer',
      abstract: false,
      values: [],
    };

    const action: Action = { type: 'CREATE_PARAM', payload: newParam };
    dispatch(action);
  };

  //handle parameter change
  const handleParamUpdate = (id: string, updatedParam: TaskParameterType) => {
    const action: Action = {
      type: 'UPDATE_PARAM',
      payload: { id, updatedParam },
    };
    dispatch(action);
  };

  //handle parameter delete
  const handleParamDelete = (id: string) => {
    const action: Action = { type: 'DELETE_PARAM', payload: id };
    dispatch(action);
  };

  // handle abstract change
  const hanldeAbstractChange = (value: boolean) => {
    const action: Action = { type: 'UPDATE_ABSTRACT', payload: value };
    dispatch(action);
  };

  // handle add Task variant
  const [showPopover, setShowPopover] = useState(false);
  const { request: tasksRequest } = useRequest<TasksResponseType>();
  const categories = useCategoryStore((state) => state.categories);
  const [taskList, setTaskList] = useState<TaskType[]>([genericTask]);
  const [selectedTask, setSelectedTask] = useState<TaskType>(taskList[0]);

  const handleOpenPopover = () => {
    setShowPopover(true);
    if (taskList.length === 1) {
      for (const category of categories) {
        getTasks(category.id_category);
      }
    }
  };

  const handleSelectTask = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const task = taskList.find((task) => task.id_task === event.target.value);
    if (task) {
      setSelectedTask(task);
    }
  };

  const getMaxVariantNumber = () => {
    let max = 1;
    for (const variant of selectedNode?.data?.variants || []) {
      if (variant.variant > max) {
        max = variant.variant;
      }
    }
    return max;
  };

  const handleSetCurrentVariant = (id: string) => {
    const prevId = selectedNode?.data?.currentVariant;
    selectedNode?.data && (selectedNode.data.currentVariant = id);

    if (selectedNode?.data) {
      removeTab(prevId);
    }

    updateSideBar();
  };

  const handleAddTask = (isComsite: boolean) => {
    const variantNumber = getMaxVariantNumber() + 1;
    const id = 'variant-' + variantNumber + '-' + nanoid();
    let newTask: TaskVariantType = defaultTaskVariant;

    if (isComsite) {
      newTask = {
        ...newTask,
        id_task: id,
        name: selectedTask.name,
        is_composite: true,
        variant: variantNumber,
        graphical_model: selectedTask.graphical_model,
      };
    } else {
      newTask = {
        ...newTask,
        id_task: id,
        variant: variantNumber,
        graphical_model: null,
      };
    }

    selectedNode?.data?.variants.push(newTask);
    setShowPopover(false);
    handleSetCurrentVariant(id);
  };

  const getTasks = useCallback(
    (categoryID: string) => {
      tasksRequest({
        url: `task/categories/${categoryID}/tasks`,
      })
        .then((data) => {
          if (data.data.tasks) {
            const tasks = data.data.tasks;
            setTaskList((prev) => prev.concat(tasks));
          }
        })
        .catch((error) => {
          if (error.message) {
            message(error.message);
          }
        });
    },
    [tasksRequest]
  );

  return (
    <div className="sidebar">
      <div className="sidebar__close">
        <span className="iconfont" onClick={handleClosePanel}>
          &#xe600;
        </span>
      </div>
      <div className="sidebar__variants">
        <span className="sidebar__variants__title">Task Variant</span>
        <DropDown
          options={
            selectedNode?.data?.variants.map((variant: TaskVariantType) => {
              // return `variant-${variant.variant}`;
              return variant.id_task;
            }) || []
          }
          onOptionSelected={handleSetCurrentVariant}
          value={selectedNode?.data?.currentVariant || 'variant'}
          className="variant__dropdown"
        />

        <span className="iconfont " onClick={handleOpenPopover}>
          &#xe601;
        </span>
      </div>
      <div className="sidebar__save-info">
        Please click the current selected task node to save the changes before
        variant selection or addition.
      </div>
      {showPopover && (
        <div className="popover__variant">
          <span
            className="popover__variant__close iconfont"
            onClick={() => setShowPopover(false)}
          >
            &#xe600;
          </span>
          <div className="popover__variant__atomic">
            <button onClick={() => handleAddTask(false)}>
              Add an Atomic Task
            </button>
          </div>
          <div className="popover__variant__line"></div>
          <div className="popover__variant__composite">
            <select name="" id="" onChange={handleSelectTask}>
              {taskList.map((task) => (
                <option key={task.id_task} value={task.id_task}>
                  {task.name}
                </option>
              ))}
            </select>
            <button onClick={() => handleAddTask(true)}>
              Add a Composite Task
            </button>
          </div>
        </div>
      )}

      <StaticTable
        properties={{
          name: (
            <input
              type="text"
              className="transparent-input"
              defaultValue={taskState.name}
              onChange={handleNameChange}
            />
          ),
          description: (
            <textarea
              className="transparent-input"
              style={{
                fontFamily: 'inherit',
                width: '2.9rem',
                height: '0.5rem',
              }}
              defaultValue={taskState.description}
              onChange={handleDescriptionChange}
            />
          ),
          abstract: (
            <RadioButton
              choices={[
                { label: 'yes', value: 'yes' },
                { label: 'no', value: 'no' },
              ]}
              defaultValue={taskState.isAbstract ? 'yes' : 'no'}
              name="abstract"
              onOptionSelected={hanldeAbstractChange}
            />
          ),
          implementation: (
            <select
              id="taskSelector"
              value={taskState.implementationRef}
              onChange={handleImplementationRefChange}
            >
              {taskImpReferences.map((task, index) => (
                <option key={index} value={task}>
                  {task}
                </option>
              ))}
            </select>
          ),
          category: (
            <DropDown
              options={['Generic'].concat(
                categories.map((category) => category.name)
              )}
              value={'Generic'}
              className="normal__dropdown"
            />
          ),
          type: (
            <DropDown
              options={['type 1', 'type 2', 'type 3']}
              value="type 1"
              className="normal__dropdown"
            />
          ),
        }}
      />

      {taskState?.parameters?.map((param: TaskParameterType) => (
        <DynamicTable
          currentParam={param}
          key={param.id}
          onParamUpdate={handleParamUpdate}
          onDelete={handleParamDelete}
        />
      ))}

      <CustomButton
        buttonText="add parameter"
        handleClick={handleAddParameter}
      />
    </div>
  );
};

export default TaskConfigPanel;
