import React from 'react'

import { SectionTitle } from './atoms/Title'
import { LinkText } from './atoms/Text'

export default function Portfolio({portfolio}) {
  return (
      <section>
        <SectionTitle>Portfolio</SectionTitle>

        <ul>
        {
          portfolio.map((e, i) => (<li key={i}><LinkText href={e.link}>{e.name}</LinkText></li>))
        }
        </ul>
      </section>
  )
}
