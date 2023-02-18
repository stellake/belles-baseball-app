import facepaint from "facepaint"

const breakpoints = [768]

export const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)
