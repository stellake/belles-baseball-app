import React from "react"
import "./exercise-selection.css"
import image1 from "../images/baserunning/baserunning8.jpeg"
import image2 from "../images/baserunning/baserunning2.jpeg"
import image3 from "../images/baserunning/baserunning4.jpeg"
import { PrimaryButton } from "./shared/primaryButton"
import { EXERCISE_KEYS } from "../exercises"
import { mainPageContent } from "../data/main-page-content"

export const ExerciseSelection = ({ onExerciseSelected }) => (
  <div className="exercise-selection-page">
    <h1>{mainPageContent.title}</h1>
    <p className="exercise-selection-description">
      {mainPageContent.description}
    </p>
    <div className="exercise-cards-container">
      {mainPageContent.exerciseOptions.map((option, index) => (
        <ExerciseOptionCard
          key={option.key}
          option={option}
          onExerciseSelected={onExerciseSelected}
        />
      ))}
    </div>
  </div>
)

const exerciseOptionCardContainerCss = shouldReverse =>
  "exercise-option-card-container" + (shouldReverse ? " reverse-content" : "")

const image = imageKey => {
  switch (imageKey) {
    case 1:
      return image1
    case 2:
      return image2
    default:
      return image3
  }
}

const ExerciseOptionCard = ({ option, onExerciseSelected }) => (
  <div
    className={exerciseOptionCardContainerCss(
      option.key === EXERCISE_KEYS.INTERMEDIATE_SECOND_BASE
    )}
  >
    <div
      css={{
        width: "40%",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        backgroundImage: `url(${image(option.imageKey)})`,
      }}
    />
    <div className="exercise-option-card-content">
      <div className="exercise-option-card-title">{option.title}</div>
      <div className="exercise-option-card-description">
        {option.description}
      </div>
      <PrimaryButton
        key={option.key}
        text="Choose this drill"
        onButtonClick={() => onExerciseSelected(option.key)}
      />
    </div>
  </div>
)
