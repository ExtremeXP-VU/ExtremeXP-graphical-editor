import { useState, useEffect } from "react";
import useRequest from "../../hooks/useRequest";
import { message } from "../../utils/message";
import { timestampToDate } from "../../utils/timeToDate";

type ResponseType = {
  message: string;
  data: {
    experiments: [ExperimentType];
  };
};

type ExperimentType = {
  id_experiment: string;
  name: string;
  create_at: number;
  update_at: number;
  specifications: [];
  dataset: [];
};

const Experiments = () => {
  const [experiments, setExperiments] = useState([]);
  const [expName, setExpName] = useState("");
  const { request } = useRequest<ResponseType>();

  useEffect(() => {
    request({
      url: `exp/experiments`,
    })
      .then((data) => {
        const experiments = data.data.experiments;
        if (experiments) {
          setExperiments(experiments);
        }
      })
      .catch((error) => {
        message(error.response.data?.message || "unknown error");
      });
  }, [request]);

  const handleNewExperiment = () => {
    if (!expName) return message("Experiment name can not be empty");
    request({
      url: `exp/experiments/create`,
      method: "POST",
      data: {
        exp_name: expName,
      },
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        message(error.response.data?.message || "unknown error");
      });
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
              value={expName}
              onChange={(e) => setExpName(e.target.value)}
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
                <li className="experiments__folders__list__item" key={index}>
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
        <div className="experiments__experiment"></div>
      </div>
    </>
  );
};

export default Experiments;
