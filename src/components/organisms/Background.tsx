import  React from 'react'

import { SectionTitle, SubSectionTitle } from '../atoms/Title'
import { Text } from '../atoms/Text'

const Background: React.FC = () => (
  <section>
    <SectionTitle>Background</SectionTitle>

    <section>
      <SubSectionTitle>Master&apos;s Degree</SubSectionTitle>
      <Text>Graduate School of Informatics, Kansai University, 2013-2015</Text>
    </section>

    <section>
      <SubSectionTitle>Bachelor&apos;s Degree</SubSectionTitle>
      <Text>Faculty of Informatics, Kansai University, 2010-2013</Text>
    </section>
  </section>
)

export default Background
