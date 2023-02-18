import SecondBase1 from "../videos/second-base-1.mp4"
import SecondBase2 from "../videos/second-base-2.mp4"
import SecondBase3 from "../videos/second-base-3.mp4"
import SecondBase4 from "../videos/second-base-4.mp4"
import SecondBase5 from "../videos/second-base-5.mp4"
import SecondBase6 from "../videos/second-base-6.mp4"
import SecondBase7 from "../videos/second-base-7.mp4"
import ThirdBase1 from "../videos/third-base-1.mp4"
import ThirdBase2 from "../videos/third-base-2.mp4"
import ThirdBase3 from "../videos/third-base-3.mp4"
import ThirdBase4 from "../videos/third-base-4.mp4"
import ThirdBase5 from "../videos/third-base-5.mp4"
import { EXERCISE_KEYS } from "../exercises"

const standardGoOption = isCorrectAnswer => ({
  text: "Go!",
  isCorrectAnswer,
})

const standardWaitOption = isCorrectAnswer => ({
  text: "Wait...",
  isCorrectAnswer,
})

const standardTagUpOption = isCorrectAnswer => ({
  text: "Tag Up",
  isCorrectAnswer,
})

// TODO: Sort out the correct/incorrect options
const basicSecondBaseVideos = [
  {
    src: SecondBase1,
    options: [standardGoOption(true), standardWaitOption(false)],
  },
  {
    src: SecondBase2,
    options: [standardGoOption(true), standardWaitOption(false)],
  },
  {
    src: SecondBase3,
    options: [standardGoOption(false), standardWaitOption(true)],
  },
  {
    src: SecondBase4,
    options: [standardGoOption(false), standardWaitOption(true)],
  },
]

const intermediateSecondBaseVideos = [
  ...basicSecondBaseVideos,
  {
    src: SecondBase5,
    options: [standardGoOption(false), standardWaitOption(true)],
  },
  {
    src: SecondBase6,
    options: [standardGoOption(false), standardWaitOption(true)],
  },
  {
    src: SecondBase7,
    options: [standardGoOption(true), standardWaitOption(false)],
  },
]

const thirdBaseVideos = [
  {
    src: ThirdBase1,
    options: [
      standardGoOption(false),
      standardWaitOption(false),
      standardTagUpOption(true),
    ],
  },
  {
    src: ThirdBase2,
    options: [
      standardGoOption(false),
      standardWaitOption(false),
      standardTagUpOption(true),
    ],
  },
  {
    src: ThirdBase3,
    options: [
      standardGoOption(true),
      standardWaitOption(false),
      standardTagUpOption(false),
    ],
  },
  {
    src: ThirdBase4,
    options: [
      standardGoOption(false),
      standardWaitOption(true),
      standardTagUpOption(false),
    ],
  },
  {
    src: ThirdBase5,
    options: [
      standardGoOption(true),
      standardWaitOption(false),
      standardTagUpOption(false),
    ],
  },
]

export const videosByExercise = {
  [EXERCISE_KEYS.BASIC_SECOND_BASE]: basicSecondBaseVideos,
  [EXERCISE_KEYS.INTERMEDIATE_SECOND_BASE]: intermediateSecondBaseVideos,
  [EXERCISE_KEYS.BASIC_THIRD_BASE]: thirdBaseVideos,
}
