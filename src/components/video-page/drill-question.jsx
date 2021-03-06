import {DrillAnswerOption} from './drill-answer-option';
import React from 'react';

export const DrillQuestion = ({ currentVideo, onOptionSelected, userHasAnswered }) => (
  <div className="question-container">
    <p className="question-text">What would you do?</p>
    {
      currentVideo.options.map((option) => (
        <DrillAnswerOption
          option={option}
          onOptionSelected={onOptionSelected}
          shouldDisableButton={userHasAnswered}
        />
      ))
    }
  </div>
);
