import React from "react"
import { AnswerOverlay } from "./answer-overlay"
import { SecondaryButton } from "../shared/secondaryButton"
import { QUESTION_STATUS } from "./video-page-content"
import { FONTS } from "../../styles/fonts"
import { mq } from "../../styles/mediaQuery"

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
      )
    case QUESTION_STATUS.ANSWERED:
      return (
        <AnswerOverlay
          hasSelectedCorrectAnswer={hasSelectedCorrectAnswer}
          isLastVideo={isLastVideo}
          nextExerciseButtonClicked={nextExerciseButtonClicked}
        />
      )
    default:
      return null
  }
}

const TimeoutOverlay = ({ nextExerciseButtonClicked }) => {
  return (
    <div className="video-overlay answer-container">
      <div
        css={mq({
          ...FONTS.bold,
          marginBottom: "1.5rem",
          fontSize: ["1.5rem", "2rem"],
          textAlign: "center",
          padding: "0 20px",
        })}
      >
        Sorry, you ran out of time!
      </div>
      <SecondaryButton
        text="Next drill"
        onButtonClick={nextExerciseButtonClicked}
      />
    </div>
  )
}
