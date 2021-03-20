import React, {useRef, useState} from 'react';
import '../video-page.css';
import {PlayIcon} from '../shared/play-icon';

const Timer = ({ secondsLeftToAnswer }) => (
  <div className="video-overlay light">
    <div className="timer-wrapper">
      <span>{secondsLeftToAnswer}</span>
    </div>
  </div>
);

export const VideoCard = ({ isVisible, src, onVideoStarted, secondsLeftToAnswer, shouldDisplayTimer }) => {
  const videoStyle = isVisible ? 'video-container visible' : 'video-container';
  const videoComponent = useRef(null);
  const [shouldAllowVideoPlay, setShouldAllowVideoPlay] = useState(true);

  const onPlayClicked = () => {
    onVideoStarted();
    videoComponent.current.play();
    setShouldAllowVideoPlay(false);
  };

  return (
    <div className={videoStyle} key={src}>
      <video width="100%" ref={videoComponent} >
        <source src={src} type="video/mp4"/>
      </video>
      {shouldAllowVideoPlay
        ? <div className="video-overlay" onClick={onPlayClicked}><PlayIcon/></div>
        : shouldDisplayTimer ? <Timer secondsLeftToAnswer={secondsLeftToAnswer} /> : null
      }
    </div>
  )
};
