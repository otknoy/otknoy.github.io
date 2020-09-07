import React from 'react'

import { SectionTitle } from './atoms/Title'

export default function Portfolio({portfolio}) {
  return (
      <section>
        <SectionTitle>Portfolio</SectionTitle>

        <ul>
        {
          portfolio.map((e, i) => (<li key={i}><a href={e.link}>{e.name}</a></li>))
        }
        </ul>
      </section>
  )
}
