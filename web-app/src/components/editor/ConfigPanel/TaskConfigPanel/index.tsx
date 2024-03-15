import './style.scss';
import React, { useState, useCallback, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useImmerReducer } from 'use-immer';
import { taskConfigReducer, Action } from './reducer';

import {
  useConfigPanelStore,
  useParamStore,
} from '../../../../stores/configPanelStore';
import { useReactFlowInstanceStore } from '../../../../stores/reactFlowInstanceStore';
import { useCategoryStore } from '../../../../stores/categoryStore';
import {
  TaskDataType,
  TaskType,
  genericTask,
  defaultTaskData,
  ParameterType,
  defaultParameter,
} from '../../../../types/task';

import Popover from '../../../general/Popover';
import { TasksResponseType } from '../../../../types/requests';
import useRequest from '../../../../hooks/useRequest';
import { message } from '../../../../utils/message';
import { removeTab, useTabStore } from '../../../../stores/tabStore';

import DropDown from '../SupportComponents/DropDown';
import RadioButton from '../SupportComponents/RadioButton';
import StaticTable from '../SupportComponents/StaticTable';
import CustomButton from '../SupportComponents/CustomButton';
import DynamicTable from '../SupportComponents/DynamicTable';

interface TaskConfigPanelProps {
  updateSideBar: () => void;
}

const TaskConfigPanel: React.FC<TaskConfigPanelProps> = ({ updateSideBar }) => {
  const selectedNodeId = useConfigPanelStore((state) => state.selectedNodeId);
  const selectedTaskData = useConfigPanelStore(
    (state) => state.selectedTaskData
  );

  const [taskState, dispatch] = useImmerReducer(
    taskConfigReducer,
    selectedTaskData
  );

  useEffect(() => {
    useConfigPanelStore.setState({ selectedTaskData: taskState });
  }, [taskState]);

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

  // handle add variant
  const [showPopover, setShowPopover] = useState(false);
  const { request: tasksRequest } = useRequest<TasksResponseType>();
  const categories = useCategoryStore((state) => state.categories);
  const [taskList, setTaskList] = useState<TaskType[]>([genericTask]);
  const [selectedTask, setSelectedTask] = useState<TaskType>(taskList[0]);

  const nodes = useReactFlowInstanceStore((state) => state.nodes);
  const currentNode = nodes.find((node) => node.id === selectedNodeId);
  const selectedVariant = useConfigPanelStore(
    (state) => state.selectedTaskVariant
  );

  const variantIndex = currentNode?.data.variants.findIndex(
    (variant: TaskDataType) => variant.id_task === selectedVariant
  );

  const closeMask = () => {
    setShowPopover(false);
  };

  const handleOpenPopover = () => {
    setShowPopover(true);
    for (const category of categories) {
      getTasks(category.id_category);
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
    for (const variant of currentNode?.data?.variants || []) {
      if (variant.variant > max) {
        max = variant.variant;
      }
    }
    return max;
  };

  const numParams = useParamStore((state) => state.numParams);
  const handleAddParameter = () => {
    useParamStore.setState({ numParams: numParams + 1 });
    const name = 'parameter name';
    const id = 'parameter-' + '-' + nanoid();
    const newParam: ParameterType = {
      ...defaultParameter,
      id: id,
      name: name,
      type: 'integer',
      abstract: false,
      values: [],
    };
    currentNode?.data?.variants[variantIndex]?.parameters.push(newParam);
    useParamStore.setState({ selectedParamData: newParam });
  };

  const handleAddNormalTask = () => {
    const variantNumber = getMaxVariantNumber() + 1;
    const id = 'variant-' + variantNumber + '-' + nanoid();
    const newTask = {
      ...defaultTaskData,
      id_task: id,
      variant: variantNumber,
      graphical_model: null,
    };
    currentNode?.data?.variants.push(newTask);
    setShowPopover(false);
  };

  const handleAddCompositeTask = () => {
    const variantNumber = getMaxVariantNumber() + 1;
    const id = 'variant-' + variantNumber + '-' + nanoid();

    const newTask = {
      ...defaultTaskData,
      id_task: id,
      name: selectedTask.name,
      is_composite: true,
      variant: variantNumber,
      graphical_model: selectedTask.graphical_model,
    };
    currentNode?.data?.variants.push(newTask);
    setShowPopover(false);
  };

  const tabs = useTabStore((state) => state.tabs);

  const removeRedundantTabs = (id: string) => {
    tabs.forEach((tab) => {
      if (tab.id === id) {
        removeTab(id);
      }
    });
  };

  const handleSetCurrentVariant = (id: string) => {
    currentNode?.data && (currentNode.data.currentVariant = id);
    useConfigPanelStore.setState({ selectedTaskVariant: id });

    if (currentNode?.data) {
      const variantData: TaskDataType = currentNode.data.variants.find(
        (t: TaskDataType) => t.id_task === currentNode.data.currentVariant
      );
      useConfigPanelStore.setState({ selectedTaskData: variantData });

      removeRedundantTabs(selectedVariant);
    }

    updateSideBar();
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

  const handleClosePanel = () => {
    useConfigPanelStore.getState().clearConfigStore();
  };

  return (
    <div className="sidebar">
      <span className="iconfont close-button" onClick={handleClosePanel}>
        &#xe600;
      </span>
      <div className="sidebar__variants">
        <DropDown
          options={
            currentNode?.data?.variants.map((variant: TaskDataType) => {
              // return `variant-${variant.variant}`;
              return variant.id_task;
            }) || []
          }
          onOptionSelected={handleSetCurrentVariant}
          defaultValue={currentNode?.data?.currentVariant || 'variant'}
          className="variant__dropdown"
        />

        <span className="iconfont " onClick={handleOpenPopover}>
          &#xe601;
        </span>
      </div>
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
              defaultValue="no"
              name="abstract"
            />
          ),
          implementation: '<URI>',
          category: (
            <DropDown
              options={['Generic'].concat(
                categories.map((category) => category.name)
              )}
              defaultValue={'Generic'}
              className="normal__dropdown"
            />
          ),
          type: (
            <DropDown
              options={['type 1', 'type 2', 'type 3']}
              defaultValue="type 1"
              className="normal__dropdown"
            />
          ),
        }}
      />

      {currentNode?.data?.variants[variantIndex]?.parameters?.map(
        (param: ParameterType) => (
          <DynamicTable id={param.id}/>
        )
      )}

      <CustomButton
        buttonText="add parameter"
        handleClick={handleAddParameter}
      />

      <Popover show={showPopover} blankClickCallback={closeMask}>
        <div className="popover__variant">
          <button onClick={handleAddNormalTask}>Add Normal Task</button>
          <select name="" id="" onChange={handleSelectTask}>
            {taskList.map((task) => (
              <option key={task.id_task} value={task.id_task}>
                {task.name}
              </option>
            ))}
          </select>
          <button onClick={handleAddCompositeTask}>Add Composite Task</button>
        </div>
      </Popover>
    </div>
  );
};

export default TaskConfigPanel;
