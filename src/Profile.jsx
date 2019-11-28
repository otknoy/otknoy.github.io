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

const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
`;

const Profile = () => {
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

  return (
    <Wrapper>
      <Title>Profile</Title>
      <ProfileCard>
	<ProfileImage src="https://pbs.twimg.com/profile_images/538376795251146753/aNwx731b_400x400.png" />
	<ul>
	  <li>{profile.name}</li>
	  <li>{profile.email}</li>
	  <li><a href={'https://github.com/' + profile.github}>GitHub</a></li>
	  <li><a href={'https://twitter.com/' + profile.twitter}>Twitter</a></li>
	</ul>
      </ProfileCard>
      <Wrapper>
	<section>
	  <Title>Skills</Title>
	  <ul>{profile.skills.map((e, i) => <li key={i}>{e}</li>)}</ul>
	</section>
	<section>
	  <Title>Interests</Title>
	  <ul>{profile.interests.map((e, i) => <li key={i}>{e}</li>)}</ul>
	</section>
      </Wrapper>
    </Wrapper>
  );
}

export default Profile;
