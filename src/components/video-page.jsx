import React from 'react';
import './video-page.css';
import {videosByExercise} from '../videos/videos-per-exercise';
import {VideoPageContent} from './video-page/video-page-content';

export const VideoPage = ({ exerciseKey, goBack }) => {

  // Randomise the order for maximum fun!
  const videosToDisplay = videosByExercise[exerciseKey].sort(() => Math.random() - 0.5);

  return (
    <div className="page-layover">
      <VideoPageContent videosToDisplay={videosToDisplay} goBack={goBack} />
    </div>
  )
};
