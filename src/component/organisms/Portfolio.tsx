import * as React from 'react'

import { SectionTitle } from '../atoms/Title'
import { LinkText } from '../atoms/Text'

type link = {
  name: string
  link: string
}

type links = Array<link>

const portfolio: links = [
  {
    name: 'under construction',
    link: '/',
  },
]

const Portfolio: React.FC = () => (
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
