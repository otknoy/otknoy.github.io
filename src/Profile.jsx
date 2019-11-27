import React from "react";
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 8px;
`;

const Title = styled.h1`
  margin: 0px;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 64px;
  height: 64px;
`;

const List = (props) => {
  return (
    <section>
      <Title>{props.title}</Title>
      <ul>
	{props.elems.map((e, i) => <li key={i}>{e}</li>)}
    </ul>
      </section>
  );
};

const Profile = (props) => {
  return (
    <Wrapper>
      <Title>Profile</Title>
      <ProfileCard>
	<Icon src="https://pbs.twimg.com/profile_images/538376795251146753/aNwx731b_400x400.png"></Icon>

	<ul>
	  <li>{props.data.name}</li>
	  <li>{props.data.email}</li>
	  <li><a href={'https://github.com/' + props.data.github}>GitHub</a></li>
	  <li><a href={'https://twitter.com/' + props.data.twitter}>Twitter</a></li>
	</ul>
	
      </ProfileCard>
      <Wrapper>
        <List title="Skills" elems={props.data.skills} />
        <List title="Interests" elems={props.data.interests} />
      </Wrapper>
    </Wrapper>
  );
}

export default Profile;
