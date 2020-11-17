import React from 'react'

import { SectionTitle } from './atoms/Title'
import { LinkText } from './atoms/Text'

const Portfolio = ({ portfolio }) => (
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
