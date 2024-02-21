import React from "react";
import DropDown from "../DropDown";
import "./style.scss";

interface DropDownProps {
  options: string[];
  defaultValue?: string;
  className?: string;
}

interface DropDownPlusProps extends DropDownProps {
  handleClick?: () => void;
}

const DropDownPlus: React.FC<DropDownPlusProps> = ({ options, defaultValue, className, handleClick }) => {
  return (
    <div className={`flex-container`}>
      <DropDown options={options} defaultValue={defaultValue} className={className} />
      <span className="iconfont" onClick={handleClick} style={{ cursor: 'pointer' }}>&#xed1b;</span>
    </div>
  );
};

export default DropDownPlus;
