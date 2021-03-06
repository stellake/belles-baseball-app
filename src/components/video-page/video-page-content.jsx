import React, {useState} from 'react';
import '../video-page.css';
import {CrossIcon} from '../shared/cross-icon';
import {VideoCard} from './video-card';
import {DrillQuestion} from './drill-question';
import {DrillDetails} from './drill-details';
import {AnswerOverlay} from './answer-overlay';

export const VideoPageContent = ({ videosToDisplay, goBack }) => {
  const [videoNumber, setVideoNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [userHasAnswered, setUserHasAnswered] = useState(false);
  const [hasSelectedCorrectAnswer, setHasSelectedCorrectAnswer] = useState(false);

  const totalNumberOfVideos = videosToDisplay.length;
  const isLastVideo = videoNumber === totalNumberOfVideos;
  const currentVideo = videosToDisplay[videoNumber - 1];

  const onOptionSelected = (isCorrectAnswer) => {
    if (!userHasAnswered && isCorrectAnswer) {
      setScore(score + 1);
      setHasSelectedCorrectAnswer(true);
    } else {
      setHasSelectedCorrectAnswer(false);
    }

    setUserHasAnswered(true);
  };

  const nextExerciseButtonClicked = () => {
    setUserHasAnswered(false);
    setVideoNumber(videoNumber + 1);
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
          shouldDisableButton={userHasAnswered}
        />
        <DrillDetails
          score={score}
          maxScore={totalNumberOfVideos}
          videoNumber={videoNumber}
          totalNumberOfVideos={totalNumberOfVideos}
        />
      </div>
      <div className="video-wrapper">
        {videosToDisplay.map((video, index) => (
          <VideoCard
            isVisible={index === videoNumber - 1}
            src={video.src}
          />
        ))}
        {
          userHasAnswered
            ? <AnswerOverlay
                hasSelectedCorrectAnswer={hasSelectedCorrectAnswer}
                isLastVideo={isLastVideo}
                nextExerciseButtonClicked={nextExerciseButtonClicked}
              />
            : null
        }
      </div>
    </div>
  )
};
