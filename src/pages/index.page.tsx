import * as React from 'react'

import Head from 'next/head'

import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import Profile from '../components/organisms/Profile'
import Skills from '../components/organisms/Skills'
import Background from '../components/organisms/Background'

const Template: React.FC = ({ children }) => (
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

const Home: React.FC = () => {
  const data = {
    jobTitle: 'web engineer, architect',
    skills: [
      'Java, Kotlin, SpringBoot',
      'Go, Python',
      'Docker, Kubernetes, Microservices',
      'Solr',
      'Information Retrieval',
      'Human Computer Interaction',
      'Exploratory Search',
    ],
    background: [
      {
	title: "Master's Degree",
	text: "Graduate School of Informatics, Kansai University, 2013-2015",
      },
      {
	title: "Bachelor's Degree",
	text: "Faculty of Informatics, Kansai University, 2010-2013",
      },
    ],
  }

  return (
    <Template>
      <Head>
	<title>Naoya Otsuka</title>
	<meta name="description" content="Naoya Otsuka, web engineer" />
	<meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <Profile jobTitle={data.jobTitle}/>
      <Skills skills={data.skills} />
      {/* <Background list={data.background}/> */}
    </Template >
  )
}

export default Home
