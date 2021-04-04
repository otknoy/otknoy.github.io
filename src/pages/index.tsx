import * as React from 'react'

import Head from 'next/head'

import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import Profile from '../components/organisms/Profile'
import Interest from '../components/organisms/Interest'

const Home: React.SFC = () => (
  <div style={{maxWidth: '410px', margin: '0 auto', padding: '0 8px'}}>
    <Head>
      <title>Naoya Otsuka</title>
      <meta name="description" content="Naoya Otsuka, web engineer" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>

    <Header />

    <Profile />
    <Interest />

    <Footer />
  </div>
)

export default Home
