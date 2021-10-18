import React from 'react'

import Link from 'next/link'

import { SectionTitle } from '../atoms/Title'

const Portfolio: React.FC = () => (
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
