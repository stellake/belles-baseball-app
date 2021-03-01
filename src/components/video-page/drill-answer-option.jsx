import React from 'react';
import '../video-page.css';
import {CrossIcon} from '../shared/cross-icon';
import {Button} from '../shared/button';
import {TickIcon} from '../shared/tick-icon';

export const DrillAnswerOption = ({ option, onOptionSelected, shouldShowAnswers }) => {
  const getIconStyle = (isCorrectAnswer) => isCorrectAnswer ? 'correct-answer' : 'wrong-answer';

  return (
    <div className="question-option" key={option.text}>
      <Button
        key={option.text}
        text={option.text}
        onButtonClick={() => onOptionSelected(option.isCorrectAnswer)}
      />
      <div
        className={getIconStyle(option.isCorrectAnswer)}
        style={{ visibility: shouldShowAnswers ? '' : 'hidden' }}
      >
        {option.isCorrectAnswer ? <TickIcon size="25px" /> : <CrossIcon size="18px" />}
      </div>
    </div>
  );
};
