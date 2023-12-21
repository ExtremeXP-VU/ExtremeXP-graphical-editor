import "./style.scss";
import { useState, useEffect, useCallback } from "react";
import useRequest from "../../../hooks/useRequest";
import { message } from "../../../utils/message";
import { timestampToDate, timeNow } from "../../../utils/timeToDate";
import { useNavigate, useLocation } from "react-router-dom";
import {
  downloadGraphicalModel,
  uploadGraphicalModel,
} from "../../../utils/fileIO";
import Popover from "../../general/Popover";
import {
  GraphicalModelType,
  SpecificationType,
  defaultSpecification,
} from "../../../types/experiment";
import {
  SpecificationsResponseType,
  CreateSpecificationResponseType,
  UpdateSpecificationNameResponseType,
  DeleteSpecificationResponseType,
} from "../../../types/requests";

const Specifications = () => {
  const [specifications, setSpecifications] = useState([defaultSpecification]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newSpecName, setNewSpecName] = useState("");

  const [showPopover, setShowPopover] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  const isSpecificationEmpty = specifications.length === 0;

  // make sure the expID is the same as the one in the url
  const expID = useLocation().pathname.split("/")[3];

  const { request: specificationsRequest } =
    useRequest<SpecificationsResponseType>();
  const { request: createSpecificationRequest } =
    useRequest<CreateSpecificationResponseType>();
  const { request: updateSpecNameRequest } =
    useRequest<UpdateSpecificationNameResponseType>();
  const { request: deleteSpecificationRequest } =
    useRequest<DeleteSpecificationResponseType>();

  const navigate = useNavigate();

  const getSpecifications = useCallback(() => {
    specificationsRequest({
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
  }, [specificationsRequest, expID]);

  useEffect(() => {
    getSpecifications();
  }, [getSpecifications]);

  const postNewSpecification = useCallback(
    (name: string, graphicalModel: GraphicalModelType) => {
      createSpecificationRequest({
        url: `/exp/experiments/${expID}/specifications/create`,
        method: "POST",
        data: {
          spec_name: name,
          graphical_model: graphicalModel,
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
    },
    [expID, createSpecificationRequest, getSpecifications]
  );

  const handleNewSpecification = () => {
    postNewSpecification(`specification-${timeNow()}`, {
      nodes: [],
      edges: [],
    });
  };

  const handleStartEditingName = (index: number) => {
    setNewSpecName(specifications[index].name);
    if (editingIndex === null) {
      setEditingIndex(index);
    } else {
      setEditingIndex(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (editingIndex === null) return;
      if (
        newSpecName === "" ||
        newSpecName === specifications[editingIndex].name
      ) {
        setEditingIndex(null);
        return;
      }
      renameSpecification();
      setEditingIndex(null);
    }
  };

  const renameSpecification = () => {
    if (newSpecName === "" || editingIndex === null) return;
    if (newSpecName === specifications[editingIndex].name) return;
    if (newSpecName.length > 35) {
      message("The length of the name should be less than 35 characters.");
      return;
    }
    updateSpecNameRequest({
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
        message(error.response.data?.message || error.message);
      });
  };

  const handleDownloadSpecification = (index: number) => {
    downloadGraphicalModel(
      specifications[index].graphical_model,
      specifications[index].name
    );
  };

  const handleOpenSpecification = (specification: SpecificationType) => {
    navigate(`/editor/${expID}/${specification.id_specification}`);
  };

  function handleOpenPopover(index: number) {
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

  const handleDeleteSpecification = () => {
    if (deleteIndex === null) return;
    deleteSpecificationRequest({
      url: `/exp/experiments/${expID}/specifications/${specifications[deleteIndex].id_specification}/delete`,
      method: "DELETE",
    })
      .then(() => {
        getSpecifications();
      })
      .catch((error) => {
        message(error.response.data?.message || error.message);
      });
    closeMask();
  };

  async function handleImportSpecification() {
    const model = await uploadGraphicalModel();
    if (!model) {
      return;
    }
    postNewSpecification(`imported-specification-${timeNow()}`, model);
  }

  return (
    <div className="specification">
      <div className="specification__functions">
        <button
          className="specification__functions__new"
          onClick={handleNewSpecification}
        >
          new specification
        </button>
        <button
          className="specification__functions__import"
          onClick={handleImportSpecification}
        >
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
        {isSpecificationEmpty ? (
          <div className="specification__contents__empty">
            <span className="iconfont">&#xe6a6;</span>
            <p>Empty Specification</p>
          </div>
        ) : (
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
                    onClick={() => handleOpenPopover(index)}
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
        )}
      </div>
      <Popover show={showPopover} blankClickCallback={closeMask}>
        <div className="popover__delete">
          <div className="popover__delete__text">
            {`Do you want to delete ${
              deleteIndex
                ? specifications[deleteIndex].name
                : "the specification"
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
              onClick={handleDeleteSpecification}
            >
              confirm
            </button>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default Specifications;
