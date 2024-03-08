import './style.scss';
import React, { useState, useCallback } from 'react';
import { nanoid } from 'nanoid';
import DropDown from '../SupportComponents/DropDown';
import RadioButton from '../SupportComponents/RadioButton';
import StaticTable from '../SupportComponents/StaticTable';
import CustomButton from '../SupportComponents/CustomButton';
import DynamicTable from '../SupportComponents/DynamicTable';
import { useConfigPanelStore } from '../../../../stores/configPanelStore';
import { useReactFlowInstanceStore } from '../../../../stores/reactFlowInstanceStore';
import { useCategoryStore } from '../../../../stores/categoryStore';
import { TaskDataType, TaskType, genericTask } from '../../../../types/task';
import Popover from '../../../general/Popover';
import { TasksResponseType } from '../../../../types/requests';
import useRequest from '../../../../hooks/useRequest';
import { message } from '../../../../utils/message';
import { removeTab, useTabStore } from '../../../../stores/tabStore';

interface TaskConfigPanelProps {
  updateSideBar: () => void;
}

const TaskConfigPanel: React.FC<TaskConfigPanelProps> = ({ updateSideBar }) => {
  const [numParameters, setNumParameters] = useState(0);
  const selectedTaskData = useConfigPanelStore(
    (state) => state.selectedTaskData
  );
  const selectedNodeId = useConfigPanelStore((state) => state.selectedNodeId);

  const nodes = useReactFlowInstanceStore((state) => state.nodes);
  const currentNode = nodes.find((node) => node.id === selectedNodeId);

  const addParameter = () => {
    setNumParameters(numParameters + 1);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTaskData = {
      ...selectedTaskData,
      name: event.target.value,
    };
    useConfigPanelStore.setState({ selectedTaskData: newTaskData });
  };

  const handleClosePanel = () => {
    useConfigPanelStore.getState().clearConfigStore();
  };

  // handle add variant
  const [showPopover, setShowPopover] = useState(false);
  const { request: tasksRequest } = useRequest<TasksResponseType>();
  const categories = useCategoryStore((state) => state.categories);
  const [taskList, setTaskList] = useState<TaskType[]>([genericTask]);
  const [selectedTask, setSelectedTask] = useState<TaskType>(taskList[0]);

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

  const handleAddNormalTask = () => {
    const variantNumber = getMaxVariantNumber() + 1;
    const id = nanoid() + '-variant-' + variantNumber;
    const newTask = {
      id_task: id,
      name: 'task',
      is_composite: false,
      variant: variantNumber,
    };
    currentNode?.data?.variants.push(newTask);
    setShowPopover(false);
  };

  const handleAddCompositeTask = () => {
    const variantNumber = getMaxVariantNumber() + 1;
    const id = nanoid() + '-variant-' + variantNumber;

    const newTask = {
      id_task: id,
      name: selectedTask.name,
      is_composite: true,
      variant: variantNumber,
      graphical_model: selectedTask.graphical_model,
    };
    currentNode?.data?.variants.push(newTask);
    setShowPopover(false);
  };

  const selectedVariant = useConfigPanelStore((state) => state.selectedVariant);
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
    useConfigPanelStore.setState({ selectedVariant: id });

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
              defaultValue={selectedTaskData.name}
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
              defaultValue={`Lorem ipsum dolor sit amet consectetur.`}
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

      {Array.from({ length: numParameters }).map((_, index) => (
        <DynamicTable key={index} number={index + 1} />
      ))}

      <CustomButton buttonText="add parameter" handleClick={addParameter} />
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
