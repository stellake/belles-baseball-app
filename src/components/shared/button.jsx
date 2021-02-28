import React from 'react';
import './button.css';

export const Button = ({ text, onButtonClick }) => (
  <div className="difficulty-button" onClick={onButtonClick}>{text}</div>
);
