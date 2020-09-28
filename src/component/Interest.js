import React from 'react'

import { SectionTitle } from './atom/Title'
import { Text } from './atom/Text'

export default function Interest({ interest }) {
  return (
    <section>
      <SectionTitle>Interest</SectionTitle>

      <ul>
        {interest.map((e, i) => (
          <li key={i}>
            <Text>{e}</Text>
          </li>
        ))}
      </ul>
    </section>
  )
}
