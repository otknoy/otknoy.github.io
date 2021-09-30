import * as React from 'react'

import { SectionTitle } from '../atoms/Title'
import { Text } from '../atoms/Text'

const Profile: React.FC = () => (
  <section>
    <SectionTitle>Profile</SectionTitle>

    <div>
      <p>
        <Text>web engineer, architect</Text>
      </p>
    </div>
  </section>
)

export default Profile
