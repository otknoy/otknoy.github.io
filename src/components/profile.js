class MyProfile extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.innerHTML = this.template();
  }

  template() {
    return `
<h1>profile</h1>
<p>Name: Naoya Otsuka</p>
</ul>
`;
  }
}

customElements.define('my-profile', MyProfile);
