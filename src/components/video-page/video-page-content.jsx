import React, { useState } from 'react';
import '../video-page.css';
import { CrossIcon } from '../shared/cross-icon';
import { VideoCard } from './video-card';
import { DrillQuestion } from './drill-question';
import { DrillDetails } from './drill-details';
import { VideoOverlay } from './video-overlay';

export const QUESTION_STATUS = {
  LOADED: 'loaded',
  VIDEO_STARTED: 'video_started',
  ANSWERED: 'answered',
  TIMEOUT: 'timeout',
};

const TIMEOUT_SECONDS = 8;

export const VideoPageContent = ({ videosToDisplay, goBack }) => {
  const [videoNumber, setVideoNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [questionStatus, setQuestionStatus] = useState(QUESTION_STATUS.LOADED);
  const [hasSelectedCorrectAnswer, setHasSelectedCorrectAnswer] = useState(false);
  const [videoStartTime, setVideoStartTime] = useState(0);
  const [secondsLeftToAnswer, setSecondsLeftToAnswer] = useState(TIMEOUT_SECONDS);

  const totalNumberOfVideos = videosToDisplay.length;
  const isLastVideo = videoNumber === totalNumberOfVideos;
  const currentVideo = videosToDisplay[videoNumber - 1];

  const onOptionSelected = (isCorrectAnswer) => {
    if (questionStatus === QUESTION_STATUS.VIDEO_STARTED) {
      setHasSelectedCorrectAnswer(isCorrectAnswer);
      setSecondsLeftToAnswer(null);

      if (isCorrectAnswer) {
        const maxMillisecondsForAnswering = TIMEOUT_SECONDS * 1000;
        const millisecondsTakenToAnswer = Date.now() - videoStartTime;
        const scoreForThisRound = Math.floor(
          (maxMillisecondsForAnswering - millisecondsTakenToAnswer) / 100
        );
        setScore(score + Math.max(scoreForThisRound, 0));
      }

      setQuestionStatus(QUESTION_STATUS.ANSWERED);
    }
  };

  const nextExerciseButtonClicked = () => {
    setQuestionStatus(QUESTION_STATUS.LOADED);
    setVideoNumber(videoNumber + 1);
  };

  const onVideoStarted = () => {
    setVideoStartTime(Date.now());
    setSecondsLeftToAnswer(TIMEOUT_SECONDS);
    setQuestionStatus(QUESTION_STATUS.VIDEO_STARTED);
    const timerDown = setInterval(() => {
      setSecondsLeftToAnswer((seconds) => {
        // TODO: Handle this properly!
        if (seconds === 0 || seconds === null) {
          if (seconds !== null) {
            setQuestionStatus(QUESTION_STATUS.TIMEOUT);
          }
          clearInterval(timerDown);
          return null;
        } else {
          return seconds - 1;
        }
      });
    }, 1000);
  };

  return (
    <div className="popup-container">
      <div className="close-button-container" onClick={goBack}>
        <CrossIcon size="20px" />
      </div>
      <div className="top-section">
        <DrillQuestion
          currentVideo={currentVideo}
          onOptionSelected={onOptionSelected}
          shouldDisableButton={questionStatus !== QUESTION_STATUS.VIDEO_STARTED}
        />
        <DrillDetails
          score={score}
          videoNumber={videoNumber}
          totalNumberOfVideos={totalNumberOfVideos}
        />
      </div>
      <div className="video-wrapper">
        {videosToDisplay.map((video, index) => (
          <VideoCard
            key={index}
            isVisible={index === videoNumber - 1}
            src={video.src}
            onVideoStarted={onVideoStarted}
            secondsLeftToAnswer={secondsLeftToAnswer}
            shouldDisplayTimer={questionStatus === QUESTION_STATUS.VIDEO_STARTED}
          />
        ))}
        <VideoOverlay
          questionStatus={questionStatus}
          hasSelectedCorrectAnswer={hasSelectedCorrectAnswer}
          isLastVideo={isLastVideo}
          nextExerciseButtonClicked={nextExerciseButtonClicked}
        />
      </div>
    </div>
  );
};
