import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 8px;
`;

const Footer = styled.footer`
  text-align: right;
`;

const Article = (props) => {
  console.log(props);

  return (
    <Wrapper>
      <header>
	<h1>{props.title}</h1>
      </header>

      <Wrapper>
	{props.text}
      </Wrapper>

      <Footer>
	{props.createdAt}
      </Footer>

    </Wrapper>
  );
};

export default Article;
