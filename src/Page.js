import React from "react"

import Header from './Header'
import Profile from './Profile'
import Articles from './Articles'
import Footer from './Footer'

const state = {
  ui: {
  },
  profiles: {
    name: 'Naoya Otsuka',
    email: 'otknoy@gmail.com',
    twitter: 'otknoy',
    github: 'otknoy',
    skills: [
      'Java, SpringBoot',
      'Node.js, express',
      'Golang, Python',
      'Docker, Kubernetes',
      'HTML, CSS, Javascript, React'
    ],
    interests: [
      'Information Retrieval',
      'Human Computer Interaction',
      'Natural Language Processing',
      'Machine Learning'
    ]
  },
  articles: [
    {
      title: 'hoge',
      text: 'foo',
      createdAt: '2019/11/29 01:23:50'
    },
    {
      title: 'hoge',
      text: 'foo',
      createdAt: '2019/11/27 22:34:44'
    },
    {
      title: 'hoge',
      text: 'foo'
    }
  ]
};

export default function Page() {
  return (
      <>
      <Header />
      <Profile {...state.profiles} />
      <Articles articles={state.articles} />
      <Footer />
      </>
  )
}
