import React, {useState} from 'react';
import '../video-page.css';
import {CrossIcon} from '../shared/cross-icon';
import {VideoCard} from './video-card';
import {DrillAnswerOption} from './drill-answer-option';

export const VideoPageContent = ({ videosToDisplay, goBack }) => {
  const [videoNumber, setVideoNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [userHasAnswered, setUserHasAnswered] = useState(false);

  const totalNumberOfVideos = videosToDisplay.length;
  const isLastVideo = videoNumber === totalNumberOfVideos;
  const currentVideo = videosToDisplay[videoNumber - 1];

  const onOptionSelected = (isCorrectAnswer) => {
    if (!userHasAnswered && isCorrectAnswer) {
      setScore(score + 1);
    }

    setUserHasAnswered(true);
  };

  const nextExerciseButtonClicked = () => {
    setUserHasAnswered(false);
    setVideoNumber(videoNumber + 1);
  };

  return (
    <div className="popup-container">
      <div className="top-section">
        <div className="question-container">
          <p className="question-text">What would you do?</p>
          {
            currentVideo.options.map((option) => (
              <DrillAnswerOption
                option={option}
                onOptionSelected={onOptionSelected}
                shouldShowAnswers={userHasAnswered}
              />
            ))
          }
        </div>
        <div className="top-right-section">
          <div className="close-button-container" onClick={goBack}>
            <CrossIcon size="20px" />
          </div>
          <div>
            <p>{'Your score: ' + score + '/' + totalNumberOfVideos}</p>
            <p>{'Exercise: ' + videoNumber + '/' + totalNumberOfVideos}</p>
            {<p
              style={{ visibility: userHasAnswered && !isLastVideo ? '' : 'hidden'}}
              onClick={nextExerciseButtonClicked}>
              Next drill
            </p>}
            {userHasAnswered && isLastVideo ? <p>Exercise completed!</p> : null}
          </div>
        </div>
      </div>
      <div>
        {videosToDisplay.map((video, index) => (
          <VideoCard isVisible={index === videoNumber - 1} src={video.src} />
        ))}
      </div>
    </div>
  )
};
