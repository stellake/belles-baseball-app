import React from 'react';
import './button.css';

export const Button = ({ text, onButtonClick, isDisabled }) => {
  const buttonStyle = `difficulty-button ${isDisabled ? 'disabled' : ''}`;

  return (
    <div
      className={buttonStyle}
      onClick={isDisabled ? null : onButtonClick}
    >
      {text}
    </div>
  );
};
