import React from "react";
import "./style.scss";
import DropDwon from "./DropDown";
import StaticTable from "./StaticTable";

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  return (<div className="sidebar">
    <DropDwon
      options={['variant 1', 'variant 2', 'variant 3']}
      defaultValue="variant 1"
      className="variant__dropdown"
    />
    <StaticTable properties={{
      name: "123",
      description: "Lorem ipsum dolor sit amet consectetur. "
    }}  />
  </div>
  )
};

export default SideBar;
