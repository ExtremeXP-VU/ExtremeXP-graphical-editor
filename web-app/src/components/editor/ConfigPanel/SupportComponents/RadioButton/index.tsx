import React from 'react';
import './style.scss';

interface Choice {
  label: string;
  value: string;
}

interface RadioButtonProps {
  choices: Choice[];
  defaultValue: string;
  className?: string;
  onOptionSelected?: (value: boolean) => void;
  name: string; // Added to ensure radio buttons are grouped together
}

const RadioButton: React.FC<RadioButtonProps> = ({
  choices,
  className,
  name,
  defaultValue,
  onOptionSelected,
}) => {
  const [selectedValue, setSelectedValue] =
    React.useState<string>(defaultValue);

  const handleOptionSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
    if (selectedValue === 'yes') {
      onOptionSelected && onOptionSelected(true);
    } else {
      onOptionSelected && onOptionSelected(false);
    }
  };

  return (
    <div className={`radio-button-group ${className}`}>
      {choices.map((choice, index) => (
        <label key={index} className="radio-button-label" >
          <input
            type="radio"
            name={name}
            checked={selectedValue === choice.value}
            value={choice.value}
            onChange={handleOptionSelected}
            className="radio-button-input"
          />
          {choice.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
