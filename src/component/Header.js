import React from "react"

import { PageTitle } from './atom/Title'

export default function Header() {
  return (
    <header style={{textAlign: 'center'}}>
      <PageTitle>Naoya Otsuka</PageTitle>
      <Image />
    </header>
  )
}

const Image = () => (
    <>
    <img src='https://pbs.twimg.com/profile_banners/43682408/1417191879/1500x500' width='100%' height='160px' loading='lazy' />
    </>
)
