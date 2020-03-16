import React from 'react';
import styled from 'styled-components';

import { SmallText, MediumText, LargeText } from './atoms/Text'

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
	<h1><MediumText>{props.title}</MediumText></h1>
      </Header>

      <div>
	<MediumText>{props.text}</MediumText>
      </div>

      <Footer>
	<SmallText>{props.createdAt}</SmallText>
      </Footer>

    </article>
  );
};

const Articles = (props) => {
  return (
    <Section>
      <h1><LargeText>Articles</LargeText></h1>
      {
	props.articles.map((article, i) => <Article key={i} {...article} />)
      }
    </Section>
  );
};

export default Articles;
