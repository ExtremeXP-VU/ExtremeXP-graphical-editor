import "./experiments.scss";
import { useState, useEffect, useCallback, useMemo } from "react";
import useRequest from "../../hooks/useRequest";
import { message } from "../../utils/message";
import { timestampToDate } from "../../utils/timeToDate";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { defaultExperiment } from "../../types/experiment";
import Popover from "../../components/general/Popover";
import {
  ExperimentsResponseType,
  CreateExperimentResponseType,
  UpdateExperimentResponseType,
  DeleteExperimentResponseType,
} from "../../types/requests";

const Experiments = () => {
  const [experiments, setExperiments] = useState([defaultExperiment]);
  const [currentExp, setCurrentExp] = useState(defaultExperiment);
  const [searchInput, setSearchInput] = useState("");
  const [createExpName, setCreateExpName] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [expNameInput, setExpNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const [showPopover, setShowPopover] = useState(false);

  const { request: experimentsRequest } = useRequest<ExperimentsResponseType>();
  const { request: createExpRequest } =
    useRequest<CreateExperimentResponseType>();
  const { request: updateExpRequest } =
    useRequest<UpdateExperimentResponseType>();
  const { request: deleteExpRequest } =
    useRequest<DeleteExperimentResponseType>();

  const navigate = useNavigate();
  const location = useLocation();
  const isSpecification = location.pathname.includes("/specifications");

  const filteredExperiments = useMemo(() => {
    return experiments.filter((experiment) => {
      return experiment.name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }, [experiments, searchInput]);

  const urlExpID = useMemo(() => {
    return location.pathname.split("/")[3];
  }, [location.pathname]);

  const getExperiments = useCallback(() => {
    experimentsRequest({
      url: `exp/experiments`,
    })
      .then((data) => {
        if (data.data.experiments) {
          setExperiments(data.data.experiments);
        }
      })
      .catch((error) => {
        if (error.name === "AxiosError") {
          message("Please login first");
        }
      });
  }, [experimentsRequest]);

  useEffect(() => {
    getExperiments();
  }, []);

  // set the first experiment as the current experiment when enter the page
  useEffect(() => {
    if (experiments.length > 0 && currentExp.id_experiment === "default") {
      setCurrentExp(experiments[0]);
      navigate(
        `/repository/experiments/${experiments[0].id_experiment}/specifications`
      );
    }
  }, [experiments, currentExp.id_experiment]);

  useEffect(() => {
    // find the experiment id from the url
    if (urlExpID && urlExpID !== currentExp.id_experiment) {
      const exp = experiments.find((exp) => exp.id_experiment === urlExpID);
      if (exp) setCurrentExp(exp);
    }
  }, [currentExp.id_experiment, experiments, location.pathname, urlExpID]);

  // FIXME: Add experiment name validation
  const isExperimentNameValid = (name: string) => {
    if (!name) {
      message("Experiment name can not be empty");
      return false;
    }
    if (name.length > 50) {
      message("Experiment name should be less than 50 characters");
      return false;
    }
    return true;
  };

  const handleCreateExperiment = () => {
    if (!isExperimentNameValid(createExpName)) return;
    createExpRequest({
      url: `exp/experiments/create`,
      method: "POST",
      data: {
        exp_name: createExpName,
      },
    })
      .then(() => {
        getExperiments();
      })
      .catch((error) => {
        if (error.name === "AxiosError") {
          message("Please login first");
        }
        message(error.response.data?.message || "unknown error");
      });
    setCreateExpName("");
  };

  const handleSelectExperiment = (index: number) => {
    if (isEditing) return;
    setCurrentExp(filteredExperiments[index]);
    navigate(
      `/repository/experiments/${filteredExperiments[index].id_experiment}/specifications`
    );
  };

  const handleStartEditing = () => {
    setExpNameInput(currentExp.name);
    setDescriptionInput(currentExp.description);
    setIsEditing(!isEditing);
  };

  const handleChangeNameKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      updateExperimentInfo();
    }
  };

  const handleChangeDescriptionKeyPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter") {
      updateExperimentInfo();
    }
  };

  const updateExperimentInfo = () => {
    setIsEditing(false);
    if (!isExperimentNameValid(expNameInput)) return;
    if (
      currentExp.name === expNameInput &&
      currentExp.description === descriptionInput
    ) {
      return;
    }

    updateExpRequest({
      url: `exp/experiments/${currentExp.id_experiment}/update`,
      method: "PUT",
      data: {
        exp_name: expNameInput,
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

  const handleDeleteExperiment = () => {
    deleteExpRequest({
      url: `exp/experiments/${currentExp.id_experiment}/delete`,
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
      <div className="page experiments">
        <div className="experiments__panel">
          <div className="experiments__panel__new">
            <input
              type="text"
              placeholder="enter your new experiment name"
              className="experiments__panel__new__input"
              value={createExpName}
              onChange={(e) => setCreateExpName(e.target.value)}
            />
            <button
              className="experiments__panel__new__button"
              onClick={handleCreateExperiment}
            >
              create
            </button>
          </div>
          <div className="experiments__panel__search">
            <span className="iconfont">&#xe60a;</span>
            <input
              type="text"
              disabled={isEditing}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="experiments__panel__folders">
            <div className="experiments__panel__folders__header">
              <span>Experiment name</span>
              <span>Last update</span>
            </div>
            <ul className="experiments__panel__folders__list">
              {filteredExperiments.map((experiment, index) => (
                <li
                  className={`experiments__panel__folders__list__item ${
                    currentExp.name === experiment.name ? "selected" : ""
                  }`}
                  key={experiment.id_experiment}
                  onClick={() => handleSelectExperiment(index)}
                >
                  <div className="experiments__panel__folders__list__item__name">
                    {currentExp.name !== experiment.name && (
                      <span className="iconfont closed-folder">&#xeabf;</span>
                    )}
                    {currentExp.name === experiment.name && (
                      <span className="iconfont open-folder">&#xeabe;</span>
                    )}
                    <span>{experiment.name}</span>
                  </div>
                  <div className="experiments__panel__folders__list__item__date">
                    {timestampToDate(experiment.update_at)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="experiments__experiment">
          {/* <Experiment expID={currentExp.id_experiment} /> */}
          <div className="experiments__experiment__board">
            <div className="experiments__experiment__header">
              <div className="experiments__experiment__header__info">
                <div className="experiments__experiment__header__info__name">
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
                      value={expNameInput}
                      onChange={(e) => setExpNameInput(e.target.value)}
                      onKeyUp={handleChangeNameKeyPress}
                    />
                  ) : (
                    <span>{currentExp.name}</span>
                  )}
                </div>
                <div className="experiments__experiment__header__info__description">
                  {isEditing ? (
                    <textarea
                      value={descriptionInput}
                      onChange={(e) => setDescriptionInput(e.target.value)}
                      onKeyUp={handleChangeDescriptionKeyPress}
                    />
                  ) : (
                    <p>{currentExp.description}</p>
                  )}
                </div>
              </div>
              <div className="experiments__experiment__header__info__delete">
                <button
                  title="delete the entire experiment"
                  onClick={handleOpenPopover}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="experiments__experiment__links">
              <Link
                to={`/repository/experiments/${currentExp.id_experiment}/specifications`}
              >
                <div
                  className={`experiments__experiment__links__link ${
                    isSpecification ? "selected" : ""
                  }`}
                >
                  Specifications
                </div>
              </Link>
              <Link
                to={`/repository/experiments/${currentExp.id_experiment}/dataset`}
              >
                <div
                  className={`experiments__experiment__links__link ${
                    !isSpecification ? "selected" : ""
                  }`}
                >
                  Dataset
                </div>
              </Link>
            </div>
            <div className="experiments__experiment__content">
              <Outlet />
            </div>
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
                onClick={handleDeleteExperiment}
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
