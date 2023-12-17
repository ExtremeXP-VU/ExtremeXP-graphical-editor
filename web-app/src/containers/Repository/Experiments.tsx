import "./experiments.scss";
import { useState, useEffect } from "react";
import useRequest from "../../hooks/useRequest";
import { message } from "../../utils/message";
import { timestampToDate } from "../../utils/timeToDate";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

type ResponseType = {
  message: string;
  data: {
    experiments: [];
  };
};

const timeNow = Math.floor(Date.now() / 1000);

const defaultExperiment = {
  id_experiment: "default",
  name: "create a new experiment",
  description:
    "Create your experiment folder by enter the experiment name and press the create button. The name should be less than 30 characters. You can only start editing specification after the experiment folder is created.",
  create_at: timeNow,
  update_at: timeNow,
  specifications: [],
  dataset: [],
};

const Experiments = () => {
  const [experiments, setExperiments] = useState([defaultExperiment]);
  const [newExpName, setNewExpName] = useState("");
  const [currentExp, setCurrentExp] = useState(defaultExperiment);
  const { request } = useRequest<ResponseType>();

  const navigate = useNavigate();
  const location = useLocation();
  const isSpecification = location.pathname.includes("/specifications");

  useEffect(() => {
    if (experiments.length > 0) {
      if (!location.pathname.includes("/specifications" || "/dataset")) {
        setCurrentExp(experiments[0]);
      }
    }
  }, [experiments, location.pathname]);

  useEffect(() => {
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

  // FIXME: Add experiment name validation
  const handleNewExperiment = () => {
    if (!newExpName) return message("Experiment name can not be empty");
    if (newExpName.length > 50)
      return message("Experiment name should be less than 50 characters");
    request({
      url: `exp/experiments/create`,
      method: "POST",
      data: {
        exp_name: newExpName,
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

  const handleSelectExperiment = (index: number) => {
    setCurrentExp(experiments[index]);
    navigate(
      `/repository/experiments/${experiments[index].id_experiment}/specifications`
    );
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
                  <span className="iconfont">&#xe63c;</span>
                  <span>{currentExp.name}</span>
                </div>
                <div className="experiments__experiment__header__info__description">
                  <p>{currentExp.description}</p>
                </div>
              </div>
              <div className="experiments__experiment__header__info__delete">
                <button>Delete</button>
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
