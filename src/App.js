import React from 'react'

import Header from './component/Header'
import Profile from './component/Profile'
import Portfolio from './component/Portfolio'
import Interest from './component/Interest'
import Footer from './component/Footer'

const state = {
  profile: {
    name: 'Naoya Otsuka',
    description: 'web engineer',
    link: {
      github: 'https://github.com/otknoy',
      twitter: 'https://twitter.com/otknoy',
      blog: 'https://otknoy.hatenablog.com'
    }
  },
  interest: [
    'Java, Kotlin, SpringBoot',
    'Python, Node.js, Go',
    'Docker, Kubernetes',
    'Microservices, Test-driven Development',
    'Information Retrieval', 
    'Human Computer Interaction'
  ],
  portfolio: [
    {
      name: 'under construction',
      link: '/'
    }
  ]
}

const App = () => (
    <>
      <Header />

      <Profile {...state.profile}/>
      <Interest interest={state.interest}/>
      <Portfolio portfolio={state.portfolio}/>
    
      <Footer />
    </>
)

export default App
