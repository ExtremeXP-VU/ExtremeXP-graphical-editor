import "./experiments.scss";
import { useState, useEffect, useCallback } from "react";
import useRequest from "../../hooks/useRequest";
import { message } from "../../utils/message";
import { timestampToDate, timeNow } from "../../utils/timeToDate";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

type ResponseType = {
  message: string;
  data: {
    experiments: [];
  };
};

const defaultExperiment = {
  id_experiment: "default",
  name: "create a new experiment",
  description:
    "Create your experiment folder by enter the experiment name and press the create button. The name should be less than 30 characters. You can only start editing specification after the experiment folder is created.",
  create_at: timeNow(),
  update_at: timeNow(),
};

const Experiments = () => {
  const [experiments, setExperiments] = useState([defaultExperiment]);
  const [newExpName, setNewExpName] = useState("");
  const [currentExp, setCurrentExp] = useState(defaultExperiment);

  const [isEditing, setIsEditing] = useState(false);
  const [expNameInput, setExpNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const { request } = useRequest<ResponseType>();
  const navigate = useNavigate();
  const location = useLocation();
  const isSpecification = location.pathname.includes("/specifications");

  const getExperiments = useCallback(() => {
    request({
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
  }, [request]);

  useEffect(() => {
    getExperiments();
  }, []);

  useEffect(() => {
    if (experiments.length > 0 && currentExp.id_experiment === "default") {
      setCurrentExp(experiments[0]);
    }
  }, [experiments, currentExp.id_experiment]);

  useEffect(() => {
    // find the experiment id from the url
    const expID = location.pathname.split("/")[3];
    if (expID && expID !== currentExp.id_experiment) {
      const exp = experiments.find((exp) => exp.id_experiment === expID);
      if (exp) setCurrentExp(exp);
    }
  }, [currentExp.id_experiment, experiments, location.pathname]);

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

  const handleNewExperiment = () => {
    if (!isExperimentNameValid(newExpName)) return;
    request({
      url: `exp/experiments/create`,
      method: "POST",
      data: {
        exp_name: newExpName,
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
  };

  const handleSelectExperiment = (index: number) => {
    setCurrentExp(experiments[index]);
    navigate(
      `/repository/experiments/${experiments[index].id_experiment}/specifications`
    );
  };

  const handleStartEditing = () => {
    setExpNameInput(currentExp.name);
    setDescriptionInput(currentExp.description);
    setIsEditing(true);
  };

  const handleChangeNameKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      if (!isExperimentNameValid(expNameInput)) return;
      if (currentExp.name === expNameInput) return;
      updateExperimentInfo();
    }
  };

  const handleChangeDescriptionKeyPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      if (currentExp.description === descriptionInput) return;
      updateExperimentInfo();
    }
  };

  const updateExperimentInfo = () => {
    request({
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

  const handleDeleteExperiment = () => {
    request({
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
              value={newExpName}
              onChange={(e) => setNewExpName(e.target.value)}
            />
            <button
              className="experiments__panel__new__button"
              onClick={handleNewExperiment}
            >
              create
            </button>
          </div>
          <div className="experiments__panel__search">
            <span className="iconfont">&#xe60a;</span>
            <input type="text" />
          </div>
          <div className="experiments__panel__folders">
            <div className="experiments__panel__folders__header">
              <span>Experiment name</span>
              <span>Last update</span>
            </div>
            <ul className="experiments__panel__folders__list">
              {experiments.map((experiment, index) => (
                <li
                  className={`experiments__panel__folders__list__item ${
                    currentExp.name === experiment.name ? "selected" : ""
                  }`}
                  key={index}
                  onClick={handleSelectExperiment.bind(null, index)}
                >
                  <div className="experiments__panel__folders__list__item__name">
                    {currentExp.name !== experiment.name && (
                      <span className="iconfont">&#xeabf;</span>
                    )}
                    {currentExp.name === experiment.name && (
                      <span className="iconfont">&#xeabe;</span>
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
                  onClick={handleDeleteExperiment}
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
      </div>
    </>
  );
};

export default Experiments;
