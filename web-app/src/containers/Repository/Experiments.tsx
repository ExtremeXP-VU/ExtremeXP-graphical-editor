import "./experiments.scss";
import { useState, useEffect } from "react";
import useRequest from "../../hooks/useRequest";
import { message } from "../../utils/message";
import { timestampToDate } from "../../utils/timeToDate";

import Experiment from "../../components/repository/Experiment";

type ResponseType = {
  message: string;
  data: {
    experiments: [];
  };
};

const defaultExperiment = {
  id_experiment: "",
  name: "something is wrong, please login",
  create_at: NaN,
  update_at: NaN,
  specifications: [],
  dataset: [],
};

const Experiments = () => {
  const [experiments, setExperiments] = useState([defaultExperiment]);
  const [newExpName, setNewExpName] = useState("");
  const [currentExp, setCurrentExp] = useState(defaultExperiment);
  const { request } = useRequest<ResponseType>();

  useEffect(() => {
    if (experiments.length > 0) {
      setCurrentExp(experiments[0]);
    }
  }, [experiments]);

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

  const handleNewExperiment = () => {
    if (!newExpName) return message("Experiment name can not be empty");
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
  };

  // const handleNewDeployment = async () => {
  //   try {
  //     // Sample JSON content for a new deployment
  //     const diagram = { nodes: [], edges: [] };

  //     const fileHandle = await window.showSaveFilePicker();
  //     const writable = await fileHandle.createWritable();

  //     await writable.write(JSON.stringify(diagram, null, 2));
  //     await writable.close();

  //     const file = await fileHandle.getFile();
  //     const fileName = file.name;
  //     const fileNameWithoutExtension = fileName.split(".")[0];
  //     const content = await file.text();

  //     localStorage.setItem("fileName", fileNameWithoutExtension);
  //     localStorage.setItem("diagram", content);
  //   } catch (error) {
  //     console.error("Error creating file:", error);
  //   }
  // };

  // const handleImportDeployment = async () => {
  //   try {
  //     const [fileHandle] = await window.showOpenFilePicker();
  //     const file = await fileHandle.getFile();
  //     const diagram = await file.text();

  //     const fileName = file.name;
  //     const fileNameWithoutExtension = fileName.split(".")[0];

  //     localStorage.setItem("fileName", fileNameWithoutExtension);
  //     localStorage.setItem("diagram", diagram);
  //   } catch (error) {
  //     console.error("Error importing file:", error);
  //   }
  // };
  return (
    <>
      <div className="page experiments">
        <div className="experiments__wrapper">
          <div className="experiments__new">
            <input
              type="text"
              placeholder="enter your new experiment name"
              className="experiments__new__input"
              value={newExpName}
              onChange={(e) => setNewExpName(e.target.value)}
            />
            <button
              className="experiments__new__button"
              onClick={handleNewExperiment}
            >
              create
            </button>
          </div>
          <div className="experiments__search">
            <span className="iconfont">&#xe60a;</span>
            <input type="text" />
          </div>
          <div className="experiments__folders">
            <div className="experiments__folders__header">
              <span>Experiment name</span>
              <span>Last update</span>
            </div>
            <ul className="experiments__folders__list">
              {experiments.map((experiment, index) => (
                <li
                  className={`experiments__folders__list__item ${
                    currentExp.name === experiment.name ? "selected" : ""
                  }`}
                  key={index}
                  onClick={handleSelectExperiment.bind(null, index)}
                >
                  <div className="experiments__folders__list__item__name">
                    <span className="iconfont">&#xe7b8;</span>
                    <span>{experiment.name}</span>
                  </div>
                  <div className="experiments__folders__list__item__date">
                    {timestampToDate(experiment.update_at)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="experiments__experiment">
          <Experiment expID={currentExp.id_experiment} />
        </div>
      </div>
    </>
  );
};

export default Experiments;
