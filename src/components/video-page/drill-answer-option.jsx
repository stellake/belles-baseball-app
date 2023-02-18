import React from "react"
import "../video-page.css"
import { PrimaryButton } from "../shared/primaryButton"

export const DrillAnswerOption = ({
  option,
  onOptionSelected,
  shouldDisableButton,
}) => (
  <div className="question-option" key={option.text}>
    <PrimaryButton
      key={option.text}
      text={option.text}
      onButtonClick={() => onOptionSelected(option.isCorrectAnswer)}
      isDisabled={shouldDisableButton}
    />
  </div>
)
