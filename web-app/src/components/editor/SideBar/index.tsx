import "./style.scss";
import React, { useState } from "react";
import DropDown from "./DropDown";
import RadioButton from "./RadioButton";
// import RangeSelector from "./RangeSelector";
import StaticTable from "./StaticTable";
import CustomButton from "./CustomButton";
import DynamicTable from "./DynamicTable";
import { useConfigPanelStore } from "../../../stores/configPanelStore";

const SideBar: React.FC = () => {
  const [numParameters, setNumParameters] = useState(0);
  const selectedTaskData = useConfigPanelStore(
    (state) => state.selectedTaskData
  );

  const addParameter = () => {
    setNumParameters(numParameters + 1);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTaskData = { ...selectedTaskData, name: event.target.value };
    useConfigPanelStore.setState({ selectedTaskData: newTaskData });
  };

  const handleClosePanel = () => {
    useConfigPanelStore.setState({ isOpenConfig: false });
  };

  return (
    <div className="sidebar">
      <span className="iconfont close-button" onClick={handleClosePanel}>
        &#xe600;
      </span>
      <DropDown
        options={["variant 1", "variant 2", "variant 3"]}
        defaultValue="variant 1"
        className="variant__dropdown"
      />
      <StaticTable
        properties={{
          name: (
            <input
              type="text"
              className="transparent-input"
              defaultValue={selectedTaskData.name}
              onChange={handleNameChange}
              
            />
          ),
          description: (
            <textarea
              className="transparent-input"
              style={{
                fontFamily: "inherit",
                width: "2.5rem",
                height: "0.5rem",
              }}
              defaultValue={`Lorem ipsum dolor sit amet consectetur.`}
            />
          ),
          abstract: (
            <RadioButton
              choices={[
                { label: "yes", value: "yes" },
                { label: "no", value: "no" },
              ]}
              defaultValue="no"
              name="abstract"
            />
          ),
          implementation: "<URI>",
          group: (
            <DropDown
              options={["group 1", "group 2", "group 3"]}
              defaultValue="group 1"
              className="normal__dropdown"
            />
          ),
          type: (
            <DropDown
              options={["type 1", "type 2", "type 3"]}
              defaultValue="type 1"
              className="normal__dropdown"
            />
          ),
        }}
      />

      {Array.from({ length: numParameters }).map((_, index) => (
        <DynamicTable key={index} number={index + 1} />
      ))}

      <CustomButton buttonText="add parameter" handleClick={addParameter} />
    </div>
  );
};

export default SideBar;
