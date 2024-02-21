import React from "react";
import "./style.scss";


interface DropDownProps {
    options: string[];
    defaultValue?: string;
    className?: string;
  }

const DropDown: React.FC<DropDownProps> = ({ options, defaultValue, className }) => {
    return (
      <div className={className}>
        <select defaultValue={defaultValue}>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default DropDown;