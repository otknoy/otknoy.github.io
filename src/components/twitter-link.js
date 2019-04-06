class TwitterLink extends HTMLElement {
  constructor() {
    super();

    const account = this.getAttribute('account');

    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.render(account);
  }

  render(account) {
    return `
<a href="https://twitter.com/${account}">
  <img
   src="./static/img/Twitter_Social_Icon_Rounded_Square_Color.svg"
   width="16px">
</a>
`;
  }

  static get observedAttributes() { return ['account']; }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr == 'account') {
      this.shadowRoot.innerHTML = this.render(newValue);
    }
  }
}

customElements.define('twitter-link', TwitterLink);
