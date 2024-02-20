import { useState, useCallback, useEffect } from "react";
import { CategoryType, defaultTask } from "../../../../types/task";
import { TasksResponseType } from "../../../../types/requests";
import useRequest from "../../../../hooks/useRequest";
import { message } from "../../../../utils/message";

interface SubTaskProps {
  category: CategoryType;
}

const SubTask = ({ category }: SubTaskProps) => {
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
