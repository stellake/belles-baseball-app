import React from 'react';
import './button.css';

export const SecondaryButton = ({ text, onButtonClick }) => (
  <div className="secondary-button" onClick={onButtonClick}>
    {text}
  </div>
);
