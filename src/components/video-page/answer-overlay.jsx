import React from 'react';
import {SecondaryButton} from '../shared/secondaryButton';

export const AnswerOverlay = ({ hasSelectedCorrectAnswer, isLastVideo, nextExerciseButtonClicked }) => (
  <div className="video-overlay answer-container">
    <div className="answer-text">
      {hasSelectedCorrectAnswer ? 'Correct!' : 'Wrong!'}
    </div>
    {isLastVideo
      ? <div>Exercise completed</div>
      : <SecondaryButton text="Next drill" onButtonClick={nextExerciseButtonClicked} />
    }
  </div>
);
