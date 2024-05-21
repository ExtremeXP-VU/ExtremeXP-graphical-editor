import React, { useState, useCallback, useEffect } from 'react';
import {
  CategoryType,
  defaultTask,
  defaultTaskVariant,
} from '../../../../types/task';
import { TasksResponseType } from '../../../../types/requests';
import useRequest from '../../../../hooks/useRequest';
import { message } from '../../../../utils/message';
import { nanoid } from 'nanoid';

interface SubTaskProps {
  category: CategoryType;
  setWindow: (nodeType: string) => void;
}

const SubTask = ({ category, setWindow }: SubTaskProps) => {
  const [tasks, setTasks] = useState([defaultTask]);
  const { request: tasksRequest } = useRequest<TasksResponseType>();

  const getTasks = useCallback(() => {
    tasksRequest({
      url: `task/categories/${category.id_category}/tasks`,
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
  }, [tasksRequest, category.id_category]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    task: typeof defaultTask
  ) => {
    setWindow('subflow');
    const id = 'variant-1-' + nanoid();
    const data = {
      currentVariant: id,
      variants: [
        {
          ...defaultTaskVariant,
          id_task: id,
          name: task.name,
          is_composite: true,
          graphical_model: task.graphical_model,
        },
      ],
    };
    const nodeData = { nodeType: 'task', data: data };
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(nodeData)
    );
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="panel__subtasks__content__categories">
      <div className="panel__subtasks__content__categories__category">
        <div className="panel__subtasks__content__categories__category__title">
          {category.name}
        </div>
        <div className="panel__subtasks__content__categories__category__tasks">
          {tasks.map((task, index) => {
            return (
              <div
                key={index}
                className="panel__subtasks__content__categories__category__tasks__task"
                draggable
                onDragStart={(e) => onDragStart(e, task)}
                onClick={() => setWindow('subflow')}
              >
                <span className="iconfont">&#xe608;</span>
                <p>{task.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubTask;
