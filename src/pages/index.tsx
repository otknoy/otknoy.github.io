import * as React from 'react'

import Head from 'next/head'

import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import Profile from '../components/organisms/Profile'
import Interest from '../components/organisms/Interest'

const Template: React.SFC = ({ children }) => (
  <div>
    <Header />

    {children}

    <Footer />
    <style jsx>{`
      div {
        max-width: 410px;
        margin: 0 auto;
        padding: 0 8px;
      }
      `}</style>
  </div>
)

const Home: React.SFC = () => (
  <Template>
    <Head>
      <title>Naoya Otsuka</title>
      <meta name="description" content="Naoya Otsuka, web engineer" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>

    <Profile />
    <Interest />
  </Template>
)

export default Home
