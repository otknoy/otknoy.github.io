import React from 'react'

import { PageTitle } from '../atoms/Title'

const Header = () => (
  <header style={{ textAlign: 'center' }}>
    <PageTitle>Naoya Otsuka</PageTitle>

    <img
      src="https://pbs.twimg.com/profile_banners/43682408/1417191879/1500x500"
      width="100%"
      height="160px"
      loading="lazy"
    />
  </header>
)

export default Header
