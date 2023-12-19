import "./style.scss";
import { useState, useEffect, useCallback } from "react";
import useRequest from "../../../hooks/useRequest";
import { message } from "../../../utils/message";
import { timestampToDate, timeNow } from "../../../utils/timeToDate";
import { useNavigate, useLocation } from "react-router-dom";
import {
  SpecificationType,
  defaultSpecification,
} from "../../../types/experiment";

type ResponseType = {
  message: string;
  data: {
    specifications: [];
  };
};

const Specifications = () => {
  const [specifications, setSpecifications] = useState([defaultSpecification]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newSpecName, setNewSpecName] = useState("");

  // make sure the expID is the same as the one in the url
  const expID = useLocation().pathname.split("/")[3];

  const { request } = useRequest<ResponseType>();
  const navigate = useNavigate();

  const getSpecifications = useCallback(() => {
    request({
      url: `exp/experiments/${expID}/specifications`,
    })
      .then((data) => {
        if (data.data.specifications) {
          const specifications = data.data.specifications;
          setSpecifications(specifications);
        }
      })
      .catch((error) => {
        if (error.message) {
          message(error.message);
        }
      });
  }, [request, expID]);

  useEffect(() => {
    getSpecifications();
  }, [getSpecifications]);

  const handleNewSpecification = () => {
    request({
      url: `/exp/experiments/${expID}/specifications/create`,
      method: "POST",
      data: {
        spec_name: `specification-${timeNow()}`,
      },
    })
      .then(() => {
        getSpecifications();
      })
      .catch((error) => {
        if (error.message) {
          message(error.message);
        }
      });
  };

  const handleStartEditingName = (index: number) => {
    setNewSpecName(specifications[index].name);
    setEditingIndex(index);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      renameSpecification();
      setEditingIndex(null);
    }
  };

  const renameSpecification = () => {
    request({
      url: `/exp/experiments/${expID}/specifications/${
        specifications[editingIndex!].id_specification
      }/update/name`,
      method: "PUT",
      data: {
        spec_name: newSpecName,
      },
    })
      .then(() => {
        getSpecifications();
      })
      .catch((error) => {
        if (error.message) {
          message(error.message);
        }
      });
  };

  const handleDeleteSpecification = (index: number) => {
    request({
      url: `/exp/experiments/${expID}/specifications/${specifications[index].id_specification}/delete`,
      method: "DELETE",
    })
      .then(() => {
        getSpecifications();
      })
      .catch((error) => {
        if (error.message) {
          message(error.message);
        }
      });
  };

  const handleDownloadSpecification = (index: number) => {
    message("download now implemented yet");
    console.log(index);
  };

  const handleOpenSpecification = (specification: SpecificationType) => {
    navigate(`/editor/${expID}/${specification.id_specification}`);
  };

  // const handleImportSpecification = async () => {
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
    <div className="specification">
      <div className="specification__functions">
        <button
          className="specification__functions__new"
          onClick={handleNewSpecification}
        >
          new specification
        </button>
        <button className="specification__functions__import">
          import specification
        </button>
      </div>
      <div className="specification__contents">
        <div className="specification__contents__header">
          <div className="specification__contents__header__title">
            Specification
          </div>
          <div className="specification__contents__header__create">
            Create At
          </div>
          <div className="specification__contents__header__update">
            Update At
          </div>
        </div>
        <ul className="specification__contents__list">
          {specifications.map((specification, index) => (
            <li className="specification__contents__list__item" key={index}>
              <div className="specification__contents__list__item__title">
                <span
                  title="modify the name"
                  className="iconfont"
                  onClick={() => handleStartEditingName(index)}
                >
                  &#xe63c;
                </span>
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={newSpecName}
                    onChange={(e) => setNewSpecName(e.target.value)}
                    onKeyUp={handleKeyPress}
                  />
                ) : (
                  <p>{specification.name}</p>
                )}
              </div>
              <div className="specification__contents__list__item__create">
                {timestampToDate(specification.create_at)}
              </div>
              <div className="specification__contents__list__item__update">
                {timestampToDate(specification.update_at)}
              </div>
              <div className="specification__contents__list__item__operations">
                <span
                  title="download graphical model"
                  className="iconfont"
                  onClick={() => handleDownloadSpecification(index)}
                >
                  &#xe627;
                </span>
                <span
                  title="delete this specification"
                  className="iconfont"
                  onClick={() => handleDeleteSpecification(index)}
                >
                  &#xe634;
                </span>
                <button
                  title="open specification in the graphical editor"
                  onClick={() => {
                    handleOpenSpecification(specification);
                  }}
                >
                  open
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Specifications;
