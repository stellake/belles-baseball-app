import { DrillAnswerOption } from './drill-answer-option';
import React from 'react';

export const DrillQuestion = ({
  currentVideo,
  onOptionSelected,
  userHasAnswered,
}) => (
  <div className="question-container">
    <div className="question-text">What would you do?</div>
    <div className="answers-container">
      {currentVideo.options.map((option) => (
        <DrillAnswerOption
          key={option.text}
          option={option}
          onOptionSelected={onOptionSelected}
          shouldDisableButton={userHasAnswered}
        />
      ))}
    </div>
  </div>
);
