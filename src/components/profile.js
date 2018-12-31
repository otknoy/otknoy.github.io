class MyProfile extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});

    const profile = {
      name: 'Naoya Otsuka',
      mail: 'otknoy@gmail.com',
      github: 'otknoy',
      twitter: 'otknoy',
      facebook: 'naoya.otsuka.9'
    };

    shadowRoot.innerHTML = this.template(profile);
  }

  template(profile) {
    return `
<div>
  <h2>Profile</h2>
  <ul>
    <li>${profile.name}</li>
    <li>${profile.mail}</li>
    <li><a href="https://github.com/${profile.github}">GitHub</a></li>
    <li><a href="https://twitter.com/${profile.twitter}">Twitter</a></li>
    <li><a href="https://www.facebook.com/${profile.facebook}">Facebook</a></li>
  </ul>
</div>
`;
  }
}

customElements.define('my-profile', MyProfile);
