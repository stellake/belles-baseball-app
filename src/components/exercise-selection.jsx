import React from 'react';
import './exercise-selection.css';
import '../belles-baserunning-images/baserunning8.jpeg';
import '../belles-baserunning-images/baserunning2.jpeg';
import '../belles-baserunning-images/baserunning4.jpeg';
import {Button} from './shared/button';
import {EXERCISE_KEYS} from '../exercises';
import {mainPageContent} from '../static-text/main-page-content';

export const ExerciseSelection = ({ onExerciseSelected }) => (
  <div className="exercise-selection-page">
    <h1>{mainPageContent.title}</h1>
    <p className="exercise-selection-description">{mainPageContent.description}</p>
    <div className="exercise-cards-container">
      {
        mainPageContent.exerciseOptions.map(((option, index) => (
          <ExerciseOptionCard
            key={option.key}
            option={option}
            onExerciseSelected={onExerciseSelected}
          />
        )))
      }
    </div>
  </div>
);

const exerciseOptionCardContainerCss = (shouldReverse) => 'exercise-option-card-container' + (shouldReverse ? ' reverse-content' : '');
const exerciseOptionImageCss = (imageKey) => 'exercise-option-card-image image-' + imageKey;

const ExerciseOptionCard = ({ option, onExerciseSelected }) => (
  <div className={exerciseOptionCardContainerCss(option.key === EXERCISE_KEYS.INTERMEDIATE_SECOND_BASE)}>
    <div className={exerciseOptionImageCss(option.imageKey)} />
    <div className="exercise-option-card-content">
      <div className="exercise-option-card-title">{option.title}</div>
      <div className="exercise-option-card-description">{option.description}</div>
      <Button
        key={option.key}
        text="Choose this drill"
        onButtonClick={() => onExerciseSelected(option.key)}
      />
    </div>
  </div>
);
