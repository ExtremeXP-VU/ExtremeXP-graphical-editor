import React, { useState } from 'react';
import './style.scss';

interface DropDownProps {
  options: string[];
  value?: string;
  className?: string;
  onOptionSelected?: (option: string) => void;
  onCaseTargetLinkChange?: (index: number, targetLinkName: string) => void;
  index?: number;
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  value,
  className,
  onOptionSelected,
  onCaseTargetLinkChange,
  index,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    value
  );

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    onOptionSelected && onOptionSelected(event.target.value); // Call the callback function
    onCaseTargetLinkChange &&
      onCaseTargetLinkChange(index!, event.target.value); // Call the callback function
  };

  return (
    <div className={className}>
      <select value={selectedOption} onChange={handleOptionChange}>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
