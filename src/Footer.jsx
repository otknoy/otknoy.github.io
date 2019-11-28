import React from "react";
import styled from 'styled-components';

const Wrapper = styled.footer`
  text-align: center;
  margin-top: auto;
`;

const Title = styled.h1`
  margin: 0px;
  padding: 4px;
  font-size: 16px;
  color: white;
  background-color: black;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Title>(C) 1988-2019 Naoya Otsuka</Title>
    </Wrapper>
  );
};

export default Footer;
