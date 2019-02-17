import './skill_and_interest.js';
import './twitter-link.js';

class MyProfile extends HTMLElement {
  constructor() {
    super();

    const profile = {
      icon: "https://pbs.twimg.com/profile_images/538376795251146753/aNwx731b_400x400.png",
      name: 'Naoya Otsuka',
      mail: 'otknoy@gmail.com',
      github: 'otknoy',
      facebook: 'naoya.otsuka.9'
    };

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = this.template(profile);
  }

  template(profile) {
    return `
<section>
  <h1>Profile</h1>

  <img src="${profile.icon}" width="64px">

  <ul>
    <li>${profile.name}</li>
    <li>${profile.mail}</li>
  </ul>

  <div>
    <a href="https://github.com/${profile.github}">GitHub</a>
    <twitter-link account="otknoy"></twitter-link>
    <a href="https://www.facebook.com/${profile.facebook}">Facebook</a>
  </div>

  <my-skill-and-interest></my-skill-and-interest>
</section>
`;
  }
}

customElements.define('my-profile', MyProfile);
