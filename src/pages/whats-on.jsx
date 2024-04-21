import React from "react"
import Seo from "../components/shared/seo"
import Layout from "../components/shared/layout"
import { COLOURS } from "../styles/colours"
import { FONTS } from "../styles/fonts"
import { LocationIcon } from "../icons/locationIcon"
import { InternalPrimaryLinkButton } from "../components/shared/button"
import threeGirlsImg from "../images/threeGirls.png"
import WHATS_ON_CONTENT from "../../data/whats-on.json"

const EventCard = ({
  day,
  description,
  location,
  isFirst,
  firstBorderRadius,
}) => (
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
      {day}
    </div>
    <div
      css={{ display: "flex", flexDirection: "column", alignSelf: "center" }}
    >
      <div css={{ ...FONTS.regular, fontSize: 18 }}>{description}</div>
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

const getBorderRadius = index => {
  if (index === 0) {
    return "0 20px 20px"
  }
  if (index === 2) {
    return "20px 0 20px 20px"
  }
  return "20px"
}

// TODO: Add support for more than 3 months
// TODO: Border radius to be added to CSS rather than calculated dynamically
export default function WhatsOn() {
  const calendarEvents = WHATS_ON_CONTENT.calendar.slice(0, 3)
  const months = calendarEvents.map(e => e.month)
  const [selectedMonth, setSelectedMonth] = React.useState(months[1])
  const selectedMonthContent = calendarEvents.find(
    event => event.month === selectedMonth
  )
  const selectedMonthIndex = months.indexOf(selectedMonth)

  return (
    <Layout>
      <h1>{WHATS_ON_CONTENT.title}</h1>
      <p css={{ marginBottom: 40 }}>{WHATS_ON_CONTENT.description}</p>
      <div css={{ display: "flex" }}>
        {months.map(month => (
          <MonthOption
            key={month}
            text={month}
            isSelected={month === selectedMonth}
            onClick={() => setSelectedMonth(month)}
          />
        ))}
      </div>
      <div>
        {selectedMonthContent.events.map((event, index) => (
          <div css={{ marginBottom: 15 }}>
            <EventCard
              key={index}
              {...event}
              isFirst={index === 0}
              firstBorderRadius={getBorderRadius(selectedMonthIndex)}
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
