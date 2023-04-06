import React from "react"
import { Link } from "gatsby"
import { COLOURS } from "../../styles/colours"
import { FONTS } from "../../styles/fonts"

const buttonStyle = {
  ...FONTS.regular,
  textDecoration: "none",
  background: COLOURS.hotPink,
  padding: "10px 20px",
  fontSize: 16,
  width: "140px",
  height: "44px",
  borderRadius: 1000,
  display: "inline-block",
  textAlign: "center",
  color: "white",
  cursor: "pointer",
  border: "none",
  display: "inline-block",
}

const secondaryButtonStyle = { ...buttonStyle, background: COLOURS.darkBlue }

export const PrimaryLinkButton = ({ href, children }) => (
  <a css={buttonStyle} target="_blank" rel="noreferrer" href={href}>
    {children}
  </a>
)

export const PrimaryButton = ({ onClick, children }) => (
  <button css={buttonStyle} onClick={onClick}>
    {children}
  </button>
)

export const InternalPrimaryLinkButton = ({ to, children }) => (
  <Link css={buttonStyle} to={to}>
    {children}
  </Link>
)

export const SecondaryButton = ({ onClick, children }) => (
  <button css={secondaryButtonStyle} onClick={onClick}>
    {children}
  </button>
)
