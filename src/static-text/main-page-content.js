import {EXERCISE_KEYS} from '../exercises';

export const mainPageContent = {
  title: 'Welcome!',
  description: 'This activity has been designed for the Southern Belles baseball team, a new British team who will play in the inaugural BBF Women\'s League in 2021. This is currently a very basic activity (which we hope will evolve over time) and coaches of other teams may well decide that their level and or their opposition would dictate other actions.\n' +
    'Positive criticism is welcomed. Negative criticism will be ignored.',
  exerciseOptions: [
    {
      title: '2B Basic',
      description: 'If the ball is hit at you or to your left then you will "Go". If the ball is hit to your right then you must "Wait" to see if the ball gets through. This drill assumes that on a ground ball you are not forced and there are less than two outs.',
      imageKey: 1,
      key: EXERCISE_KEYS.BASIC_SECOND_BASE
    },
    {
      title: '2B Intermediate',
      description: 'If the ball is hit at you or to your left then we will "Go". If the ball is hit to your right then we must "Wait" to see if the ball gets through. If the ball is fielded by the 3rd baseman and the 3rd baseman throws the ball we can "Go". If the 3rd baseman looks you back you must "Wait". This drill assumes that on a ground ball you are not forced and there are less than two outs.',
      imageKey: 2,
      key: EXERCISE_KEYS.INTERMEDIATE_SECOND_BASE
    },
    {
      title: '3B',
      description: 'If the ball is hit on the ground we will "Go" UNLESS the ball is hit at or in front of the pitcher when we must "Wait". If the ball is hit into the air we must "Tag Up" until the ball is caught. This drill assumes that on a ground ball you are not forced and there are less than two outs.',
      imageKey: 3,
      key: EXERCISE_KEYS.BASIC_THIRD_BASE
    }
  ]
};
