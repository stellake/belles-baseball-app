import { DrillAnswerOption } from "./drill-answer-option"
import React from "react"
import { mq } from "../../styles/mediaQuery"

export const DrillQuestion = ({
  currentVideo,
  onOptionSelected,
  userHasAnswered,
}) => (
  <div css={mq({ margin: ["auto", 0], marginBottom: 20 })}>
    <div className="question-text">What would you do?</div>
    <div css={{ display: "flex" }}>
      {currentVideo.options.map(option => (
        <DrillAnswerOption
          key={option.text}
          option={option}
          onOptionSelected={onOptionSelected}
          shouldDisableButton={userHasAnswered}
        />
      ))}
    </div>
  </div>
)
