import React, { useEffect } from 'react';
import './style.scss';

interface Choice {
  label: string;
  value: string;
}

interface RadioButtonProps {
  choices: Choice[];
  defaultValue: string;
  className?: string;
  onOptionSelected: (value: boolean) => void;
  name: string; // Added to ensure radio buttons are grouped together
}

const RadioButton: React.FC<RadioButtonProps> = ({
  choices,
  className,
  name,
  defaultValue,
  onOptionSelected,
}) => {
  const [selectedValue, setSelectedValue] = React.useState<string>(defaultValue);

  useEffect(() => {
    if (selectedValue === 'yes') {
      onOptionSelected(true);
    } else {
      onOptionSelected(false);
    }
  }, [selectedValue]);

  return (
    <div className={`radio-button-group ${className}`}>
      {choices.map((choice, index) => (
        <label key={index} className="radio-button-label">
          <input
            type="radio"
            name={name}
            defaultChecked={defaultValue === choice.value}
            checked={selectedValue === choice.value}
            value={choice.value}
            onChange={(e) => {
              setSelectedValue(e.target.value);
              console.log('e.target.value' + e.target.value);
              
            }}
            className="radio-button-input"
          />
          {choice.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
