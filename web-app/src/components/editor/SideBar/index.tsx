import React from "react";
import "./style.scss";
import DropDwon from "./DropDown";
import RadioButton from "./RadioButton";
import RangeSelector from "./RangeSelector";
import StaticTable from "./StaticTable";
import DropDownPlus from "./DropDownPlus";

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  return (<div className="sidebar">
    <DropDwon
      options={['variant 1', 'variant 2', 'variant 3']}
      defaultValue="variant 1"
      className="variant__dropdown"
    />
    <StaticTable properties={{
      name: "name",
      description: "Lorem ipsum dolor sit amet consectetur.",
      abstract: <RadioButton
        choices={[
          { label: "yes", value: "yes" },
          { label: "no", value: "no" },
        ]}
        defaultValue="no"
        name="abstract" /> ,
        implementation: "<URI>",
      group: <DropDownPlus options={['group 1', 'group 2', 'group 3']} defaultValue="group 1" className="normal__dropdown" />,
      type: <DropDwon options={['type 1', 'type 2', 'type 3']} defaultValue="type 1" className="normal__dropdown" />,
      range: <RangeSelector />, 
      
    }}  />

  </div>
  )
};

export default SideBar;
