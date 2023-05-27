import React from "react"
import Seo from "../components/shared/seo"
import Layout from "../components/shared/layout"
import { COLOURS } from "../styles/colours"
import { FONTS } from "../styles/fonts"
import { LocationIcon } from "../icons/locationIcon"
import { InternalPrimaryLinkButton } from "../components/shared/button"
import { CALENDAR_CONTENT } from "../data/calendar"
import threeGirlsImg from "../images/threeGirls.png"

const EventCard = ({ number, title, location, isFirst, firstBorderRadius }) => (
  <div
    css={{
      display: "flex",
      background: isFirst ? COLOURS.pink : COLOURS.lightPink,
      borderRadius: isFirst ? firstBorderRadius : 20,
      padding: "5px 20px",
    }}
  >
    <div
      css={{
        ...FONTS.extraBold,
        fontSize: 64,
        width: 82,
        marginRight: 20,
        textAlign: "center",
      }}
    >
      {number}
    </div>
    <div
      css={{ display: "flex", flexDirection: "column", alignSelf: "center" }}
    >
      <div css={{ ...FONTS.regular, fontSize: 18 }}>{title}</div>
      <div
        css={{
          ...FONTS.regular,
          fontSize: 14,
          display: "flex",
          alignItems: "center",
        }}
      >
        <LocationIcon size={15} />
        <span css={{ marginLeft: 5 }}>{location}</span>
      </div>
    </div>
  </div>
)

const MonthOption = ({ text, isSelected, onClick }) => (
  <button
    onClick={onClick}
    css={{
      ...FONTS.semiBold,
      border: "none",
      fontSize: 20,
      color: "black",
      flex: 1,
      textAlign: "center",
      padding: "10px",
      background: isSelected ? COLOURS.pink : "transparent",
      borderRadius: "20px 20px 0 0",
      cursor: isSelected ? undefined : "pointer",
    }}
  >
    {text}
  </button>
)

export default function WhatsOn() {
  const [selectedMonth, setSelectedMonth] = React.useState("JUNE")
  const events = CALENDAR_CONTENT[selectedMonth].events
  return (
    <Layout>
      <h1>What's on?</h1>
      <p css={{ marginBottom: 40 }}>
        Find out what we have got planned in the upcoming months.
      </p>
      <div css={{ display: "flex" }}>
        {Object.entries(CALENDAR_CONTENT).map(([k, v]) => (
          <MonthOption
            key={k}
            text={v.shortText}
            isSelected={k === selectedMonth}
            onClick={() => setSelectedMonth(k)}
          />
        ))}
      </div>
      <div>
        {events.map((event, index) => (
          <div css={{ marginBottom: 15 }}>
            <EventCard
              key={index}
              {...event}
              isFirst={index === 0}
              firstBorderRadius={CALENDAR_CONTENT[selectedMonth].borderRadius}
            />
          </div>
        ))}
      </div>
      <div
        css={{
          ...FONTS.regular,
          textAlign: "center",
          marginTop: 40,
          marginBottom: 10,
        }}
      >
        Insterested in joining us?
      </div>
      <div css={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <InternalPrimaryLinkButton
          to="/membership"
          css={{ textDecoration: "none" }}
        >
          Learn more
        </InternalPrimaryLinkButton>
      </div>
      <div css={{ maxWidth: 400, margin: "auto" }}>
        <img width="100%" src={threeGirlsImg} alt="Photos of Belles" />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="What's on" />
