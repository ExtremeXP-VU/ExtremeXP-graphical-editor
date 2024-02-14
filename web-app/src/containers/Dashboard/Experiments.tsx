import "./common.scss";
import "./experiments.scss";
import { useState, useEffect, useCallback, useMemo } from "react";
import useRequest from "../../hooks/useRequest";
import { message } from "../../utils/message";
import { timestampToDate } from "../../utils/timeToDate";
import { Outlet, useNavigate } from "react-router-dom";
import { defaultProject } from "../../types/experiment";
import Popover from "../../components/general/Popover";
import {
  ProjectsResponseType,
  CreateProjectResponseType,
  UpdateProjectResponseType,
  DeleteProjectResponseType,
} from "../../types/requests";

const Experiments = () => {
  const [projects, setProjects] = useState([defaultProject]);
  const [currentProj, setCurrentProj] = useState(defaultProject);
  const [searchInput, setSearchInput] = useState("");
  const [createprojName, setCreateProjName] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [projNameInput, setProjNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const [showPopover, setShowPopover] = useState(false);

  const { request: projectsRequest } = useRequest<ProjectsResponseType>();
  const { request: createProjectRequest } =
    useRequest<CreateProjectResponseType>();
  const { request: updateProjectRequest } =
    useRequest<UpdateProjectResponseType>();
  const { request: deleteProjectRequest } =
    useRequest<DeleteProjectResponseType>();

  const navigate = useNavigate();
  const isProjectsEmpty = projects.length === 0;

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return project.name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }, [projects, searchInput]);

  const getProjects = useCallback(() => {
    projectsRequest({
      url: `exp/projects`,
    })
      .then((data) => {
        if (data.data.projects) {
          setProjects(data.data.projects);
        }
      })
      .catch((error) => {
        if (error.name === "AxiosError") {
          message("Please login first");
        }
      });
  }, [projectsRequest, projects]);

  useEffect(() => {
    getProjects();
  }, []);

  // set the first experiment as the current experiment when enter the page
  useEffect(() => {
    if (projects.length > 0 && currentProj.id_project === "default") {
      setCurrentProj(projects[0]);
    }
  }, [projects, currentProj.id_project]);

  useEffect(() => {
    navigate(`/dashboard/projects/${currentProj?.id_project}/experiments`);
  }, [currentProj.id_project]);

  // FIXME: Add experiment name validation
  const isProjectNameValid = (name: string) => {
    if (!name) {
      message("Project name can not be empty");
      return false;
    }
    if (name.length > 50) {
      message("Project name should be less than 50 characters");
      return false;
    }
    return true;
  };

  const handleCreateProject = () => {
    if (!isProjectNameValid(createprojName)) return;
    createProjectRequest({
      url: `exp/projects/create`,
      method: "POST",
      data: {
        name: createprojName,
      },
    })
      .then(() => {
        getProjects();
      })
      .catch((error) => {
        if (error.name === "AxiosError") {
          message("Please login first");
        }
        message(error.response.data?.message || "unknown error");
      });
    setCreateProjName("");
  };

  const handleSelectProject = (index: number) => {
    if (isEditing) return;
    setCurrentProj(filteredProjects[index]);
  };

  const handleStartEditing = () => {
    setProjNameInput(currentProj.name);
    setDescriptionInput(currentProj.description);
    setIsEditing(!isEditing);
  };

  const handleChangeNameKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      updateProjectInfo();
    }
  };

  const handleChangeDescriptionKeyPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter") {
      updateProjectInfo();
    }
  };

  const updateProjectInfo = () => {
    setIsEditing(false);
    if (!isProjectNameValid(projNameInput)) return;
    if (
      currentProj.name === projNameInput &&
      currentProj.description === descriptionInput
    ) {
      return;
    }

    updateProjectRequest({
      url: `exp/projects/${currentProj.id_project}/update`,
      method: "PUT",
      data: {
        name: projNameInput,
        description: descriptionInput,
      },
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        if (error.name === "AxiosError") {
          message("Please login first");
        }
        message(error.response.data?.message || "unknown error");
      });
  };

  function handleOpenPopover() {
    setShowPopover(true);
  }

  function closeMask() {
    setShowPopover(false);
  }

  function handleCancelDelete() {
    closeMask();
  }

  const handleDeleteProject = () => {
    deleteProjectRequest({
      url: `exp/projects/${currentProj.id_project}/delete`,
      method: "DELETE",
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        if (error.name === "AxiosError") {
          message("Please login first");
        }
        message(error.response.data?.message || "unknown error");
      });
    closeMask();
  };

  return (
    <>
      <div className="page dashboard__page">
        <div className="dashboard__common__panel">
          <div className="dashboard__common__panel__new">
            <input
              type="text"
              placeholder="enter your new project name"
              className="dashboard__common__panel__new__input"
              value={createprojName}
              onChange={(e) => setCreateProjName(e.target.value)}
            />
            <button
              className="dashboard__common__panel__new__button"
              onClick={handleCreateProject}
            >
              create
            </button>
          </div>
          <div className="dashboard__common__panel__search">
            <span className="iconfont">&#xe60a;</span>
            <input
              type="text"
              disabled={isEditing}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="dashboard__common__panel__folders">
            <div className="dashboard__common__panel__folders__header">
              <span>Project name</span>
              <span>Last update</span>
            </div>
            <ul className="dashboard__common__panel__folders__list">
              {filteredProjects.map((project, index) => (
                <li
                  className={`dashboard__common__panel__folders__list__item ${
                    currentProj.name === project.name ? "selected" : ""
                  }`}
                  key={project.id_project}
                  onClick={() => handleSelectProject(index)}
                >
                  <div className="dashboard__common__panel__folders__list__item__name">
                    {currentProj.name !== project.name && (
                      <span className="iconfont closed-folder">&#xeabf;</span>
                    )}
                    {currentProj.name === project.name && (
                      <span className="iconfont open-folder">&#xeabe;</span>
                    )}
                    <span>{project.name}</span>
                  </div>
                  <div className="dashboard__common__panel__folders__list__item__date">
                    {timestampToDate(project.update_at)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="dashboard__common__right">
          <div className="dashboard__common__right__board">
            {isProjectsEmpty ? (
              <div className="dashboard__common__right__board__guide">
                <div className="dashboard__common__right__board__guide__top">
                  <span className="iconfont">&#xe61a;</span>
                  <p>Click the button to create a new project</p>
                </div>
                <div className="dashboard__common__right__board__guide__bottom">
                  <p>(You need to enter the project name first)</p>
                </div>
              </div>
            ) : (
              <>
                <div className="dashboard__common__right__header experiments__header">
                  <div className="dashboard__common__right__header__info">
                    <div className="dashboard__common__right__header__info__name">
                      <span
                        title="edit the name and description"
                        className="iconfont"
                        onClick={handleStartEditing}
                      >
                        &#xe63c;
                      </span>
                      {isEditing ? (
                        <input
                          type="text"
                          value={projNameInput}
                          onChange={(e) => setProjNameInput(e.target.value)}
                          onKeyUp={handleChangeNameKeyPress}
                        />
                      ) : (
                        <span>{currentProj.name}</span>
                      )}
                    </div>
                    <div className="dashboard__common__right__header__info__description">
                      {isEditing ? (
                        <textarea
                          value={descriptionInput}
                          onChange={(e) => setDescriptionInput(e.target.value)}
                          onKeyUp={handleChangeDescriptionKeyPress}
                        />
                      ) : (
                        <p>{currentProj.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="dashboard__common__right__header__info__delete">
                    <button
                      title="delete the entire experiment"
                      onClick={handleOpenPopover}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="dashboard__common__right__content project__content">
                  <Outlet />
                </div>
              </>
            )}
          </div>
        </div>
        <Popover show={showPopover} blankClickCallback={closeMask}>
          <div className="popover__delete">
            <div className="popover__delete__text">
              Do you want to delete the experiment?
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
                onClick={handleDeleteProject}
              >
                confirm
              </button>
            </div>
          </div>
        </Popover>
      </div>
    </>
  );
};

export default Experiments;
