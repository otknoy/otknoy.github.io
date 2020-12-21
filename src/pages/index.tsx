import Head from 'next/head'

import Header from '../component/organisms/Header'
import Profile from '../component/organisms/Profile'
import Portfolio from '../component/organisms/Portfolio'
import Interest from '../component/organisms/Interest'
import Footer from '../component/organisms/Footer'

export default function Home() {
  return (
    <>
      <Head>
	<title>otknoy</title>
	<meta name="description" content="Naoya Otsuka, web engineer" />
	<meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <Header />

      <Profile />
      <Interest />
      <Portfolio />

      <Footer />
    </>
  )
}
