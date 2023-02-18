import * as React from "react"
import { ExerciseSelection } from "./exercise-selection"
import { VideoPage } from "./video-page"
import { useState } from "react"

const PAGES = {
  MAIN: "main",
  VIDEO: "video",
}

export const ExercisePage = () => {
  const [exerciseKey, setExerciseKey] = useState(null)
  const [currentPage, setCurrentPage] = useState(PAGES.MAIN)

  const onExerciseSelected = exerciseKey => {
    setExerciseKey(exerciseKey)
    setCurrentPage(PAGES.VIDEO)
  }

  return (
    <div>
      {currentPage === PAGES.MAIN ? (
        <ExerciseSelection onExerciseSelected={onExerciseSelected} />
      ) : null}
      {currentPage === PAGES.VIDEO ? (
        <VideoPage
          exerciseKey={exerciseKey}
          goBack={() => setCurrentPage(PAGES.MAIN)}
        />
      ) : null}
    </div>
  )
}
