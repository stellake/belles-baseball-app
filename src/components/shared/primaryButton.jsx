import React from 'react';
import './button.css';

export const PrimaryButton = ({ text, onButtonClick, isDisabled }) => {
  const buttonStyle = `primary-button ${isDisabled ? 'disabled' : ''}`;

  return (
    <div
      className={buttonStyle}
      onClick={isDisabled ? null : onButtonClick}
    >
      {text}
    </div>
  );
};
