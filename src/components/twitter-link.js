class TwitterLink extends HTMLElement {
  constructor() {
    super();

    const account = this.getAttribute('account');

    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
<a href="https://twitter.com/${account}">
  <img
   src="./img/Twitter_Social_Icon_Rounded_Square_Color.svg"
   width="16px">
</a>
`;
  }
}

customElements.define('twitter-link', TwitterLink);
