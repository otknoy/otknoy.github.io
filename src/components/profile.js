import './skill.js';
import './interest.js';

import '../atoms/title.js'

class MyProfile extends HTMLElement {
  constructor() {
    super();

    const profile = {
      icon: "https://pbs.twimg.com/profile_images/538376795251146753/aNwx731b_400x400.png",
      name: 'Naoya Otsuka',
      mail: 'otknoy@gmail.com',
      github: 'otknoy',
      twitter: 'otknoy',
      facebook: 'naoya.otsuka.9'
    };

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = this.template(profile);
  }

  css() {
    return `
section {
  padding: 8px;
}

.profile {
  display: flex;
  align-items: center;
  // justify-content: center;
}

img {
  width: 64px;
  height: 64px;
}

h1 {
  margin: 0px;
}
`;
  }

  template(profile) {
    return `
<style>
  ${this.css()}
</style>
<section>
  <medium-title>Profile</medium-title>

  <div class="profile">
    <img src="${profile.icon}">

    <ul>
      <li>${profile.name}</li>
      <li>${profile.mail}</li>
      <li>
        <div>
          <a href="https://github.com/${profile.github}">GitHub</a>
          <a href="https://twitter.com/${profile.twitter}">Twitter</a>
          <a href="https://www.facebook.com/${profile.facebook}">Facebook</a>
        </div>
      </li>
    </ul>
  </div>

  <my-skill-and-interest></my-skill-and-interest>
  <my-skill></my-skill>
  <my-interest></my-interest>
</section>
`;
  }
}

customElements.define('my-profile', MyProfile);
