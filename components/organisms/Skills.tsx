import React from 'react'

import { SectionTitle } from '../atoms/Title'
import { Text } from '../atoms/Text'

type Props = {
  skills: string[]
}

const Skills = ({ skills }: Props) => (
  <section>
    <SectionTitle>Skills</SectionTitle>

    <ul>
      {skills.map((e, i) => (
        <li key={i}>
          <Text>{e}</Text>
        </li>
      ))}
    </ul>
  </section>
)

export default Skills
