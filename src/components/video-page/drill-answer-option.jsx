import React from "react"
import "../video-page.css"
import { SecondaryButton } from "../shared/button"
import { FONTS } from "../../styles/fonts"
import { mq } from "../../styles/mediaQuery"

export const DrillAnswerOption = ({
  option,
  onOptionSelected,
  shouldDisableButton,
}) => (
  <div
    key={option.text}
    css={mq({
      ...FONTS.regular,
      display: "flex",
      alignItems: "center",
      minWidth: 120,
      marginRight: 10,
    })}
  >
    <SecondaryButton
      text={option.text}
      onClick={() =>
        shouldDisableButton
          ? undefined
          : onOptionSelected(option.isCorrectAnswer)
      }
    >
      {option.text}
    </SecondaryButton>
  </div>
)
