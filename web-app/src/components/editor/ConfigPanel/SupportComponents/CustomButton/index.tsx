import React from 'react';
import './style.scss';

interface CustomButtonProps {
  buttonText: string;
  handleClick?: () => void;
}

// Update the component to accept props
const CustomButton: React.FC<CustomButtonProps> = ({
  buttonText,
  handleClick,
}) => {
  return (
    <div className="button-container" onClick={handleClick}>
      <button className="add-parameter-button">{buttonText}</button>
    </div>
  );
};

export default CustomButton;
