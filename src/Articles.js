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

const Articles = (props) => {
  return (
    <Section>
      <h1>Articles</h1>
      {
	props.articles.map((article, i) => <Article key={i} {...article} />)
      }
    </Section>
  );

};

export default Articles;
