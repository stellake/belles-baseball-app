import React from "react"

export const DrillDetails = ({ score, videoNumber, totalNumberOfVideos }) => (
  <div className="top-right-section">
    <div>{"Your score: " + score}</div>
    <div>{"Exercise: " + videoNumber + "/" + totalNumberOfVideos}</div>
  </div>
)
