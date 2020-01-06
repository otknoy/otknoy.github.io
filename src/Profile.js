import {html, render} from 'lit-html';

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

class ProfileCard extends HTMLElement {
  constructor() {
    super();

    render(this.html(), this.attachShadow({mode: 'open'}));
  }

  html() {
    return html`
<style>
div {
  display: flex;
  align-items: center;
}

img {
  width: 64px;
  height: 64px;
}
</style>
<div>
 <img src="https://pbs.twimg.com/profile_images/538376795251146753/aNwx731b_400x400.png" />
  <ul>
    <li>${profile.name}</li>
    <li>${profile.email}</li>
    <li><a href="https://github.com/${profile.github}">GitHub</a></li>
    <li><a href="https://twitter.com/${profile.twitter}">Twitter</a></li>
  </ul>
</div>
`;
  }
}

class Skills extends HTMLElement {
  constructor() {
    super();

    render(this.html(profile.skills), this.attachShadow({mode: 'open'}));
  }

  html(skills) {
    return html`
<style>
h1 {
  margin: 0px;
}
</style>
<section>
  <h1>Skills</h1>
  <ul>
    ${skills.map((e) => html`<li>${e}</li>`)}
  </ul>
</section>
`;
  }
}

class Interests extends HTMLElement {
  constructor() {
    super();

    render(this.html(profile.interests), this.attachShadow({mode: 'open'}));
  }

  html(interests) {
    return html`
<style>
h1 {
  margin: 0px;
}
</style>
<section>
  <h1>Interests</h1>
  <ul>
    ${interests.map((e) => html`<li>${e}</li>`)}
  </ul>
</section>
`;
  }
}

customElements.define('profile-card', ProfileCard);
customElements.define('profile-skills', Skills);
customElements.define('profile-interests', Interests);

class MyProfile extends HTMLElement {
  constructor() {
    super();

    render(this.html(), this.attachShadow({mode: 'open'}));
  }

  html() {
    return html`
<style>
section {
  padding: 8px;
}

h1 {
  margin: 0px;
}
</style>
<section>
  <h1>Profile</h1>
  <profile-card></profile-card>
  <profile-skills></profile-skills>
  <profile-interests></profile-interests>
</section>
`;
  }
}

export default MyProfile;
