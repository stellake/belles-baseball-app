import React from 'react';

export const DrillDetails = ({ score, maxScore, videoNumber, totalNumberOfVideos}) => (
  <div className="top-right-section">
    <div>{'Your score: ' + score + '/' + maxScore}</div>
    <div>{'Exercise: ' + videoNumber + '/' + totalNumberOfVideos}</div>
  </div>
);
