import React, {useRef, useState} from 'react';
import '../video-page.css';
import {PlayIcon} from '../shared/play-icon';

export const VideoCard = ({ isVisible, src }) => {
  const videoStyle = isVisible ? 'video-container visible' : 'video-container';
  const videoComponent = useRef(null);
  const [shouldAllowVideoPlay, setShouldAllowVideoPlay] = useState(true);

  const onPlayClicked = () => {
    videoComponent.current.play();
    setShouldAllowVideoPlay(false);
  };

  return (
    <div className={videoStyle} key={src}>
      <video width="100%" ref={videoComponent} >
        <source src={src} type="video/mp4"/>
      </video>
      {shouldAllowVideoPlay ? <div className="video-overlay" onClick={onPlayClicked}><PlayIcon/></div> : null}
    </div>
  )
};
