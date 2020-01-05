import {html, render} from 'lit-html';

import Header from './Header.js';
import Footer from './Footer.js';

customElements.define('my-header', Header);
customElements.define('my-footer', Footer);

import Profile from './Profile.js';
customElements.define('my-profile', Profile);

class MyPage extends HTMLElement {
  constructor() {
    super();

    render(this.html(), this.attachShadow({mode: 'open'}));
  }

  html() {
    return html`
<my-header></my-header>

<my-profile></my-profile>

<my-footer></my-footer>
`;
  }
}

customElements.define('my-page', MyPage);
