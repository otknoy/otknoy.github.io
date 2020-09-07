import React from 'react'

import { SectionTitle } from './atoms/Title'

export default function Interest({interest}) {
  return (
      <section>
        <SectionTitle>Interest</SectionTitle>

        <ul>
        {
          interest.map((e, i) => (<li key={i}>{e}</li>))
        }
        </ul>
      </section>
  )
}
