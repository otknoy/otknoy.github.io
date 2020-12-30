import * as React from 'react'

import Link from 'next/link'

import { SectionTitle } from '../atoms/Title'
import { LinkText } from '../atoms/Text'

const Portfolio: React.SFC = () => (
  <section>
    <SectionTitle>Portfolio</SectionTitle>

    <ul>
      <li>
	<Link href="/portfolio">under construction</Link>
      </li>
    </ul>
  </section>
)

export default Portfolio
