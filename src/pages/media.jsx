import React from "react"
import Layout from "../components/shared/layout"
import Seo from "../components/shared/seo"
import MEDIA_CONTENT from "../../data/media.json"
import { mq } from "../styles/mediaQuery"
import { InformationCardSecondary } from "../components/shared/informationCard"

const formatDate = dateString => {
  const date = new Date(dateString)
  return date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  })
}

const Article = ({ content }) => {
  return (
    <li
      key={content.title + content.date}
      css={mq({ listStyle: "none", marginBottom: ["25px", "30px"] })}
    >
      <InformationCardSecondary
        title={`${content.title} | ${formatDate(content.date)}`}
        description={content.description}
        src={content.image}
        link={{
          href: content.link.url,
          text: content.link.text,
        }}
      />
    </li>
  )
}

export default function Media() {
  return (
    <Layout>
      <h1>Media</h1>
      <ul css={{ marginLeft: 0 }}>
        {MEDIA_CONTENT.articles.map(a => (
          <Article content={a} />
        ))}
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Belles in media" />
