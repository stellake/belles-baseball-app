import React from "react"
import "./exercise-selection.css"
import image1 from "../images/baserunning/baserunning8.jpeg"
import image2 from "../images/baserunning/baserunning2.jpeg"
import image3 from "../images/baserunning/baserunning4.jpeg"
import { EXERCISE_KEYS } from "../exercises"
import { mainPageContent } from "../data/main-page-content"
import { SecondaryButton } from "./shared/button"
import { FONTS } from "../styles/fonts"

export const ExerciseSelection = ({ onExerciseSelected }) => (
  <div className="exercise-selection-page">
    <h1>{mainPageContent.title}</h1>
    <p className="exercise-selection-description">
      {mainPageContent.description}
    </p>
    <div className="exercise-cards-container">
      {mainPageContent.exerciseOptions.map(option => (
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

const ExerciseOptionCard = ({ option, onExerciseSelected }) => {
  const shouldReverse = option.key === EXERCISE_KEYS.INTERMEDIATE_SECOND_BASE
  return (
    <div className={exerciseOptionCardContainerCss(shouldReverse)}>
      <div
        css={{
          width: "40%",
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
          backgroundImage: `url(${image(option.imageKey)})`,
          borderTopLeftRadius: shouldReverse ? 0 : 30,
          borderBottomLeftRadius: shouldReverse ? 0 : 30,
          borderTopRightRadius: shouldReverse ? 30 : 0,
          borderBottomRightRadius: shouldReverse ? 30 : 0,
        }}
      />
      <div className="exercise-option-card-content">
        <div css={{ ...FONTS.bold, fontSize: 20, marginBottom: "1rem" }}>
          {option.title}
        </div>
        <div css={{ ...FONTS.regular, fontSize: 16, marginBottom: "1.5rem" }}>
          {option.description}
        </div>
        <div css={{ margin: "auto" }}>
          <SecondaryButton onClick={() => onExerciseSelected(option.key)}>
            Practise
          </SecondaryButton>
        </div>
      </div>
    </div>
  )
}
