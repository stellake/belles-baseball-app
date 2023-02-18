import React from "react"
import { COLOURS } from "../../styles/colours"

const buttonStyle = {
  fontFamily: `'LoraBold', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif`,
  fontSize: "0.95rem",
  color: "white",
  background: COLOURS.darkBlue,
  padding: "10px 0",
  borderRadius: "2px",
  maxWidth: "200px",
  width: "100%",
  margin: "5px auto",
  cursor: "pointer",
  textAlign: "center",
}

// TODO: Sort out disabled style
const disabledStyle = {
  cursor: "default",
}

export const PrimaryButton = ({ text, onButtonClick, isDisabled }) => {
  const additionalStyle = isDisabled ? { ...disabledStyle } : {}
  return (
    <div
      css={{ ...buttonStyle, ...additionalStyle }}
      onClick={isDisabled ? null : onButtonClick}
    >
      {text}
    </div>
  )
}
