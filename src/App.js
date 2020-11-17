import React from 'react'

import Header from './component/organisms/Header'
import Profile from './component/organisms/Profile'
import Portfolio from './component/organisms/Portfolio'
import Interest from './component/organisms/Interest'
import Footer from './component/organisms/Footer'

const state = {
  profile: {
    name: 'Naoya Otsuka',
    description: 'web engineer',
    link: {
      github: 'https://github.com/otknoy',
      twitter: 'https://twitter.com/otknoy',
      blog: 'https://otknoy.hatenablog.com',
    },
  },
  interest: [
    'Java, Kotlin, SpringBoot',
    'Python, Node.js, Go',
    'Docker, Kubernetes',
    'Microservices, Test-driven Development',
    'Information Retrieval',
    'Human Computer Interaction',
  ],
  portfolio: [
    {
      name: 'under construction',
      link: '/',
    },
  ],
}

const App = () => (
  <>
    <Header />

    <Profile {...state.profile} />
    <Interest interest={state.interest} />
    <Portfolio portfolio={state.portfolio} />

    <Footer />
  </>
)

export default App
