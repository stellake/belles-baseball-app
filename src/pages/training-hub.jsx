import React, { useState } from 'react';
import { ExerciseSelection } from '../components/exercise-selection';
import { VideoPage } from '../components/video-page';

const PAGES = {
  MAIN: 'main',
  VIDEO: 'video',
};

export const TrainingHub = () => {
  const [exerciseKey, setExerciseKey] = useState(null);
  const [currentPage, setCurrentPage] = useState(PAGES.MAIN);

  const onExerciseSelected = (exerciseKey) => {
    setExerciseKey(exerciseKey);
    setCurrentPage(PAGES.VIDEO);
  };

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
  );
};
