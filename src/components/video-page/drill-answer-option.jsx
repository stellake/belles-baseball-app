import React from 'react';
import '../video-page.css';
import {Button} from '../shared/button';

export const DrillAnswerOption = ({ option, onOptionSelected, shouldDisableButton }) => (
  <div className="question-option" key={option.text}>
    <Button
      key={option.text}
      text={option.text}
      onButtonClick={() => onOptionSelected(option.isCorrectAnswer)}
      isDisabled={shouldDisableButton}
    />
  </div>
);
