import React from 'react'

import { SectionTitle, SubSectionTitle } from '../atoms/Title'
import { Text } from '../atoms/Text'

type Props = {
  list: {
    title: string
    text: string
  }[]
}

const Background = ({ list }: Props) => (
  <section>
    <SectionTitle>Background</SectionTitle>
    {list.map((e, i) => (
      <section key={i}>
        <SubSectionTitle>{e.title}</SubSectionTitle>
        <Text>{e.text}</Text>
      </section>
    ))}
  </section>
)

export default Background
