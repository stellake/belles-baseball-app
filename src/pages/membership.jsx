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

export default function Membership() {
  return (
    <Layout>
      <h1>Membership</h1>
      <div style={{ marginBottom: 20 }}>Coming soon..</div>
      <div>
        In the meantime, please find the 2023 interest form{" "}
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLScFZmqms8XaHgbnjj3n17VVoNVkOkhfkOuFmMikbUVoFEcVYQ/viewform" />.
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="New members" />
