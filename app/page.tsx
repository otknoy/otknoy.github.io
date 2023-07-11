import * as React from 'react'

import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import Profile from '../components/organisms/Profile'
import Skills from '../components/organisms/Skills'
import Background from '../components/organisms/Background'

export default function Home() {
  const profile = {
    name: 'Naoya Otsuka',
    links: [
      {
        title: 'github',
        url: 'https://github.com/otknoy',
      },
      {
        title: 'twitter',
        url: 'https://twitter.com/otknoy',
      },
      {
        title: 'blog',
        url: 'https://otknoy.hatenablog.com',
      },
    ],
  }

  const skills = [
    'Java, Kotlin, SpringBoot',
    'Go, Python',
    'Docker, Kubernetes, Microservices',
    'Solr',
    'Information Retrieval',
    'Human Computer Interaction',
    'Exploratory Search',
  ]

  const background = [
    {
      title: "Master's Degree",
      text: 'Graduate School of Informatics, Kansai University, 2013-2015',
    },
    {
      title: "Bachelor's Degree",
      text: 'Faculty of Informatics, Kansai University, 2010-2013',
    },
  ]

  return (
    <div>
      <div>
        <Header title={profile.name} links={profile.links}></Header>

        <Profile jobTitle="web engineer, architect" />
        <Skills skills={skills} />
        {/* <Background list={background}/> */}

        <Footer />

        <style>{`
        div {
          max-width: 410px;
          margin: 0 auto;
          padding: 0 8px;
        }
      `}</style>
      </div>
    </div>
  )
}
