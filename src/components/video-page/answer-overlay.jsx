import React from "react"
import { FONTS } from "../../styles/fonts"
import { SecondaryButton } from "../shared/secondaryButton"

export const AnswerOverlay = ({
  hasSelectedCorrectAnswer,
  isLastVideo,
  nextExerciseButtonClicked,
}) => (
  <div className="video-overlay answer-container">
    <div
      css={{
        ...FONTS.bold,
        marginBottom: "1.5rem",
        fontSize: "2rem",
        textAlign: "centre",
      }}
    >
      {hasSelectedCorrectAnswer ? "Correct!" : "Wrong!"}
    </div>
    {isLastVideo ? (
      <div>Exercise completed</div>
    ) : (
      <SecondaryButton
        text="Next drill"
        onButtonClick={nextExerciseButtonClicked}
      />
    )}
  </div>
)
