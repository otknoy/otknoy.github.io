import './skill_and_interest.js';

class MyProfile extends HTMLElement {
  constructor() {
    super();

    const profile = {
      name: 'Naoya Otsuka',
      mail: 'otknoy@gmail.com',
      github: 'otknoy',
      twitter: 'otknoy',
      facebook: 'naoya.otsuka.9'
    };

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = this.template(profile);
  }

  template(profile) {
    return `
<section>
  <h1>Profile</h1>

  <ul>
    <li>${profile.name}</li>
    <li>${profile.mail}</li>
  </ul>

  <div>
    <a href="https://github.com/${profile.github}">GitHub</a>
    <a href="https://twitter.com/${profile.twitter}">
     <img
       src="./img/Twitter_Social_Icon_Rounded_Square_Color.svg"
       width="16px">
    </a>
    <a href="https://www.facebook.com/${profile.facebook}">Facebook</a>
  </div>

  <my-skill-and-interest></my-skill-and-interest>
</section>
`;
  }
}

customElements.define('my-profile', MyProfile);
