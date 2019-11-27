import React from "react";
import ReactDOM from "react-dom";

import Header from './Header.jsx';
import Profile from './Profile.jsx';
import Article from './Article.jsx';
import Footer from './Footer.jsx';

const App = (props) => {
  const profile = {
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
  };
  
  const articles = [
    {title: 'hoge', text: 'foo', createdAt: '2019/11/27 22:34:44'},
    {title: 'hoge', text: 'foo'},
    {title: 'hoge', text: 'foo'}
  ];

  return (
    <div className="App">
      <Header />

      <Profile data={profile} />
      {
	articles.map((e, i) => <Article key={i} title={e.title} text={e.text} createdAt={e.createdAt} />)
      }

      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
