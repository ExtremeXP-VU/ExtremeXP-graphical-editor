import React from "react";
import "./style.scss";

interface Choice {
  label: string;
  value: string;
}

interface RadioButtonProps {
  choices: Choice[];
  defaultValue?: string;
  className?: string;
  name: string; // Added to ensure radio buttons are grouped together
}

const RadioButton: React.FC<RadioButtonProps> = ({
  choices,
  defaultValue,
  className,
  name,
}) => {
  return (
    <div className={`radio-button-group ${className}`}>
      {choices.map((choice, index) => (
        <label key={index} className="radio-button-label">
          <input
            type="radio"
            name={name}
            value={choice.value}
            defaultChecked={defaultValue === choice.value}
            className="radio-button-input"
          />
          {choice.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
