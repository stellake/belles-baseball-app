import React from 'react';

export const AnswerOverlay = ({ hasSelectedCorrectAnswer, isLastVideo, nextExerciseButtonClicked }) => (
  <div className="video-overlay answer-container">
    <div className="answer-text">
      {hasSelectedCorrectAnswer ? 'Correct!' : 'Wrong!'}
    </div>
    {isLastVideo
      ? <div>Exercise completed</div>
      :
      <div className="next-drill-button" onClick={nextExerciseButtonClicked}>
        Next drill
      </div>
    }
  </div>
);
