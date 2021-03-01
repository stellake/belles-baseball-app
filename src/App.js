import * as React from 'react';
import './App.css';
import {ExerciseSelection} from './components/exercise-selection';
import {VideoPage} from './components/video-page';
import {useState} from 'react';

const PAGES = {
  MAIN: 'main',
  VIDEO: 'video'
};

function App() {
  const [exerciseKey, setExerciseKey] = useState(null);
  const [currentPage, setCurrentPage] = useState(PAGES.MAIN);

  const onExerciseSelected = (exerciseKey) => {
    setExerciseKey(exerciseKey);
    setCurrentPage(PAGES.VIDEO);
  };

  return (
    <div className="App">
      {currentPage === PAGES.MAIN
        ? <ExerciseSelection onExerciseSelected={onExerciseSelected} />
        : null}
      {currentPage === PAGES.VIDEO
        ? <VideoPage exerciseKey={exerciseKey} goBack={() => setCurrentPage(PAGES.MAIN)}/>
        : null}
    </div>
  );
}

export default App;
