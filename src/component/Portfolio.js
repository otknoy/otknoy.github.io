import React from 'react'

import { SectionTitle } from './atom/Title'
import { LinkText } from './atom/Text'

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
