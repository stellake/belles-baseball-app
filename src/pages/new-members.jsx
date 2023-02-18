import React from "react"
import Layout from "../components/shared/layout"
import Seo from "../components/shared/seo"

const Link = ({ href }) => (
  <a
    style={{ textDecoration: "underline", fontWeight: "bold" }}
    target="_blank"
    rel="noreferrer"
    href={href}
  >
    here
  </a>
)

export default function NewMembers() {
  return (
    <Layout>
      <h1>New Members</h1>
      <div style={{ marginBottom: 20 }}>Coming soon..</div>
      <div>
        In the meantime, please find the 2023 interest form{" "}
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLScFZmqms8XaHgbnjj3n17VVoNVkOkhfkOuFmMikbUVoFEcVYQ/viewform" />{" "}
        and our Instagram account{" "}
        <Link href="https://www.instagram.com/bellesbaseball/?hl=en" />.
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="New members" />
