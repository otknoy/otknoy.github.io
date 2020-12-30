import * as React from 'react'

import Head from 'next/head'

import Layout from '../components/layout'
import Profile from '../components/organisms/Profile'
import Portfolio from '../components/organisms/Portfolio'
import Interest from '../components/organisms/Interest'

const Home: React.SFC = () => (
  <Layout>
    <Head>
      <title>otknoy</title>
      <meta name="description" content="Naoya Otsuka, web engineer" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>

    <Profile />
    <Interest />
    <Portfolio />
  </Layout>
)

export default Home
