import '../atoms/title.js';

class Header extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.html();
  }

  html() {
    return `
    <style>
      :host {
        text-align: center;
      }
    </style>
    <header>
      <large-title>otknoy's blog</large-title>
    </header>
`;
  }
}

customElements.define('my-header', Header);
