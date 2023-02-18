import React from "react"
import Seo from "../components/shared/seo"
import Layout from "../components/shared/layout"
import februaryCalendar from "../images/february-calendar.png"

export default function WhatsOn() {
  return (
    <Layout>
      <h1>2023 Season</h1>
      <h2>February</h2>
      <img src={februaryCalendar} alt="February calendar" width="100%" />
    </Layout>
  )
}

export const Head = () => <Seo title="What's on" />
