import React, { useState } from "react"
import Seo from "../components/shared/seo"
import { ExerciseSelection } from "../components/exercise-selection"
import { VideoPage } from "../components/video-page"
import Layout from "../components/shared/layout"

const PAGES = {
  MAIN: "main",
  VIDEO: "video",
}

export const TrainingHub = () => {
  const [exerciseKey, setExerciseKey] = useState(null)
  const [currentPage, setCurrentPage] = useState(PAGES.MAIN)

  const onExerciseSelected = exerciseKey => {
    setExerciseKey(exerciseKey)
    setCurrentPage(PAGES.VIDEO)
  }

  return (
    <Layout>
      {currentPage === PAGES.MAIN ? (
        <ExerciseSelection onExerciseSelected={onExerciseSelected} />
      ) : null}
      {currentPage === PAGES.VIDEO ? (
        <VideoPage
          exerciseKey={exerciseKey}
          goBack={() => setCurrentPage(PAGES.MAIN)}
        />
      ) : null}
    </Layout>
  )
}

export default TrainingHub

export const Head = () => <Seo title="Training hub" />
