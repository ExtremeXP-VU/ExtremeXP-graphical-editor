import './style.scss';
import { useState, useEffect, useCallback } from 'react';
import useRequest from '../../../hooks/useRequest';
import { message } from '../../../utils/message';
import { timestampToDate, timeNow } from '../../../utils/timeToDate';
import { useNavigate, useLocation } from 'react-router-dom';

import Popover from '../../general/Popover';
import { TaskType, defaultTask } from '../../../types/task';
import { GraphicalModelType } from '../../../types/experiment';
import {
  TasksResponseType,
  CreateTaskResponseType,
  UpdateTaskInfoResponseType,
  DeleteTaskResponseType,
} from '../../../types/requests';
import { useAccountStore } from '../../../stores/accountStore';

const Category = () => {
  const username = useAccountStore((state) => state.username);
  const [tasks, setTasks] = useState([defaultTask]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newTaskName, setNewTaskName] = useState('');

  const [showPopover, setShowPopover] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  const isCategoryEmpty = tasks.length === 0;
  // make sure the expID is the same as the one in the url
  const categoryIdByURL = useLocation().pathname.split('/')[3];

  const { request: tasksRequest } = useRequest<TasksResponseType>();
  const { request: createTaskRequest } = useRequest<CreateTaskResponseType>();
  const { request: updateTaskInfoRequest } =
    useRequest<UpdateTaskInfoResponseType>();
  const { request: deleteTaskRequest } = useRequest<DeleteTaskResponseType>();

  const navigate = useNavigate();

  const getTasks = useCallback(() => {
    tasksRequest({
      url: `task/categories/${categoryIdByURL}/tasks`,
    })
      .then((data) => {
        if (data.data.tasks) {
          const tasks = data.data.tasks;
          setTasks(tasks);
        }
      })
      .catch((error) => {
        if (error.message) {
          message(error.message);
        }
      });
  }, [tasksRequest, categoryIdByURL]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const postNewTask = useCallback(
    (name: string, provider: string, graphicalModel: GraphicalModelType) => {
      createTaskRequest({
        url: `task/categories/${categoryIdByURL}/tasks/create`,
        method: 'POST',
        data: {
          name: name,
          provider: provider,
          graphical_model: graphicalModel,
        },
      })
        .then(() => {
          getTasks();
        })
        .catch((error) => {
          if (error.message) {
            message(error.message);
          }
        });
    },
    [categoryIdByURL, createTaskRequest, getTasks]
  );

  const handleNewTask = () => {
    postNewTask(`task-${timeNow()}`, username, {
      nodes: [],
      edges: [],
    });
  };

  const handleStartEditingName = (index: number) => {
    if (!tasks[index].is_user_defined) return;
    setNewTaskName(tasks[index].name);
    if (editingIndex === null) {
      setEditingIndex(index);
    } else {
      setEditingIndex(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (editingIndex === null) return;
      if (newTaskName === '' || newTaskName === tasks[editingIndex].name) {
        setEditingIndex(null);
        return;
      }
      renameTask();
      setEditingIndex(null);
    }
  };

  const renameTask = () => {
    if (newTaskName === '' || editingIndex === null) return;
    if (newTaskName === tasks[editingIndex].name) return;
    if (newTaskName.length > 35) {
      message('The length of the name should be less than 35 characters.');
      return;
    }
    updateTaskInfoRequest({
      url: `task/categories/${categoryIdByURL}/tasks/${
        tasks[editingIndex!].id_task
      }/update/info`,
      method: 'PUT',
      data: {
        name: newTaskName,
        description: tasks[editingIndex!].description,
      },
    })
      .then(() => {
        getTasks();
      })
      .catch((error) => {
        message(error.response.data?.message || error.message);
      });
  };

  const handleOpenTask = (task: TaskType) => {
    navigate(`/editor/task/${categoryIdByURL}/${task.id_task}`);
  };

  const handleCloneTask = (task: TaskType) => {
    postNewTask(
      `${task.name}-copy-${timeNow()}`,
      task.provider,
      task.graphical_model
    );
  };

  function handleOpenPopover(index: number) {
    if (!tasks[index].is_user_defined) return;
    setDeleteIndex(index);
    setShowPopover(true);
  }

  function closeMask() {
    setShowPopover(false);
    setDeleteIndex(null);
  }

  function handleCancelDelete() {
    closeMask();
  }

  const handleDeleteTask = () => {
    if (deleteIndex === null) return;
    deleteTaskRequest({
      url: `task/categories/tasks/${tasks[deleteIndex].id_task}/delete`,
      method: 'DELETE',
    })
      .then(() => {
        getTasks();
      })
      .catch((error) => {
        message(error.response.data?.message || error.message);
      });
    closeMask();
  };

  return (
    <div className="specification">
      <div className="specification__functions task__functions">
        <button
          className="specification__functions__new"
          onClick={handleNewTask}
        >
          new template
        </button>
      </div>
      <div className="specification__contents">
        <div className="specification__contents__header task__header">
          <div className="task__header__title ">Task</div>
          <div className="task__header__provider">Provider</div>
          <div className="task__header__create">Created At</div>
          <div className="task__header__update">Updated At</div>
          <div className="task__header__operations"></div>
        </div>
        {isCategoryEmpty ? (
          <div className="specification__contents__empty">
            <span className="iconfont">&#xe6a6;</span>
            <p>Empty Tasks</p>
          </div>
        ) : (
          <ul className="specification__contents__list">
            {tasks.map((task, index) => (
              <li
                className="specification__contents__list__item task__item"
                key={index}
              >
                <div className="specification__contents__list__item__title task__item__title">
                  <span
                    title="modify the name"
                    className={`iconfont ${
                      task.is_user_defined ? 'editable' : 'not-editable'
                    }`}
                    onClick={() => handleStartEditingName(index)}
                  >
                    &#xe63c;
                  </span>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={newTaskName}
                      onChange={(e) => setNewTaskName(e.target.value)}
                      onKeyUp={handleKeyPress}
                    />
                  ) : (
                    <p>{task.name}</p>
                  )}
                </div>
                <div className="task__item__provider">{task.provider}</div>
                <div className="specification__contents__list__item__create task__item__create">
                  {timestampToDate(task.create_at)}
                </div>
                <div className="specification__contents__list__item__update task__item__update">
                  {timestampToDate(task.update_at)}
                </div>
                <div className="specification__contents__list__item__operations task__item__operations">
                  <span
                    title="delete this specification"
                    className={`iconfont ${
                      task.is_user_defined ? 'editable' : 'not-editable'
                    }`}
                    onClick={() => handleOpenPopover(index)}
                  >
                    &#xe634;
                  </span>
                  {task.is_user_defined ? (
                    <button
                      title="open task in the graphical editor"
                      onClick={() => {
                        handleOpenTask(task);
                      }}
                    >
                      open
                    </button>
                  ) : (
                    <button
                      title="clone the task"
                      onClick={() => {
                        handleCloneTask(task);
                      }}
                    >
                      clone
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Popover show={showPopover} blankClickCallback={closeMask}>
        <div className="popover__delete">
          <div className="popover__delete__text">
            {`Do you want to delete ${
              deleteIndex ? tasks[deleteIndex].name : 'the specification'
            }?`}
          </div>
          <div className="popover__delete__buttons">
            <button
              className="popover__delete__buttons__cancel"
              onClick={handleCancelDelete}
            >
              cancel
            </button>
            <button
              className="popover__delete__buttons__confirm"
              onClick={handleDeleteTask}
            >
              confirm
            </button>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default Category;
