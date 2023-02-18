import React from "react"
import "./button.css"

const buttonStyle = {
  fontFamily: `'LoraBold', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif`,
  fontSize: "0.95rem",
  background: "#00000096",
  padding: "10px 0",
  borderRadius: "2px",
  maxWidth: "150px",
  width: "100%",
  border: "2px solid white",
  cursor: "pointer",
  textAlign: "center",
}

export const SecondaryButton = ({ text, onButtonClick }) => (
  <div css={buttonStyle} onClick={onButtonClick}>
    {text}
  </div>
)
