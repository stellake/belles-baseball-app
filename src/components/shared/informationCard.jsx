import React from "react"
import { FONTS } from "../../styles/fonts"
import { mq } from "../../styles/mediaQuery"
import { InternalLink, Link } from "./link"

const CardLink = ({ text, href, to }) => {
    if (!!href) {
        return <Link href={href}>{text}</Link>
    }
    if (!!to) {
        return <InternalLink to={to}>{text}</InternalLink>
    }
    return null;
}

export const InformationCard = ({ src, title, description, reverse, last, link }) => (
    <div css={mq({ display: 'flex', flexDirection: [reverse ? 'row-reverse' : 'row', 'column'], marginBottom: '2.5rem', marginRight: [0, last ? 0 : 30], width: ['100%', '33%'] })}>
      <img placeholder="blurred" width={100} height={100} src={src} css={mq({ margin: ['auto 0', '10px auto'] })} alt={title} />
      <div css={mq({ marginLeft: [reverse ? 0 : 20, 0], marginRight: [reverse ? 20 : 0, 0], textAlign: ['left', 'center'], paddingTop: [0, '10px'], flex: 1 })}>
        <div css={mq({...FONTS.bold, fontSize: [16, 20]})}>{title}</div>
        <div css={FONTS.regular}>{description}</div>
        {link ? <div css={{ marginTop: 10 }}><CardLink {...link} /></div> : null}
      </div>
    </div>
  );
  