import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 8px;
`;

const Header = styled.header`
  
`;

const Footer = styled.footer`
  text-align: right;
`;

const Article = (props) => {
  return (
    <article>
      <Header>
	<h1>{props.title}</h1>
      </Header>

      <div>
	{props.text}
      </div>

      <Footer>
	{props.createdAt}
      </Footer>

    </article>
  );
};

const Articles = () => {
  const articles = [
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
  ];

  return (
    <Section>
      {
	articles.map((article, i) => <Article key={i} {...article} />)
      }
    </Section>
  );

};

export default Articles;
