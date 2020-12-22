import * as React from 'react'

import { SectionTitle } from '../atoms/Title'
import { LinkText } from '../atoms/Text'

const portfolio: {name: string, link: string}[] = [
  {
    name: 'under construction',
    link: '/',
  },
]

const Portfolio: React.SFC = () => (
  <section>
    <SectionTitle>Portfolio</SectionTitle>

    <ul>
      {portfolio.map((e, i) => (
        <li key={i}>
          <LinkText href={e.link}>{e.name}</LinkText>
        </li>
      ))}
    </ul>
  </section>
)

export default Portfolio
