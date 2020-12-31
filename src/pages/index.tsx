import * as React from 'react'

import Head from 'next/head'

import Template from '../components/templates'
import Profile from '../components/organisms/Profile'
import Portfolio from '../components/organisms/Portfolio'
import Interest from '../components/organisms/Interest'

const Home: React.SFC = () => (
  <Template>
    <Head>
      <title>otknoy</title>
      <meta name="description" content="Naoya Otsuka, web engineer" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>

    <Profile />
    <Interest />
    <Portfolio />
  </Template>
)

export default Home
