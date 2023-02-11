import React from 'react';
import { AnswerOverlay } from './answer-overlay';
import { SecondaryButton } from '../shared/secondaryButton';
import { QUESTION_STATUS } from './video-page-content';

export const VideoOverlay = ({
  questionStatus,
  hasSelectedCorrectAnswer,
  isLastVideo,
  nextExerciseButtonClicked,
}) => {
  switch (questionStatus) {
    case QUESTION_STATUS.TIMEOUT:
      return (
        <TimeoutOverlay nextExerciseButtonClicked={nextExerciseButtonClicked} />
      );
    case QUESTION_STATUS.ANSWERED:
      return (
        <AnswerOverlay
          hasSelectedCorrectAnswer={hasSelectedCorrectAnswer}
          isLastVideo={isLastVideo}
          nextExerciseButtonClicked={nextExerciseButtonClicked}
        />
      );
    default:
      return null;
  }
};

const TimeoutOverlay = ({ nextExerciseButtonClicked }) => {
  return (
    <div className="video-overlay answer-container">
      <div className="answer-text">Sorry, you ran out of time!</div>
      <SecondaryButton text="Next drill" onButtonClick={nextExerciseButtonClicked} />
    </div>
  );
};
