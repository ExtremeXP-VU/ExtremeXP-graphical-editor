import React, { useState } from 'react';
import './style.scss';

interface DropDownProps {
  options: string[];
  defaultValue?: string;
  className?: string;
  onOptionSelected?: (option: string) => void; // Callback function prop
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  defaultValue,
  className,
  onOptionSelected,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    defaultValue
  );

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    onOptionSelected && onOptionSelected(event.target.value); // Call the callback function
  };

  return (
    <div className={className}>
      <select value={selectedOption} onChange={handleOptionChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
