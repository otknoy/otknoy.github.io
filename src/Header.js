import {html, render} from 'lit-html';

class Header extends HTMLElement {
  constructor() {
    super();

    render(this.html(), this.attachShadow({mode: 'open'}));
  }

  html() {
    return html`
<style>
:host {
  text-align: center;
}

h1 {
  margin: 0px;
  padding: 4px;
  font-size: 24px;
}
</style>
<header>
  <h1>Naoya Otsuka</h1>
</header>
`;
  }
}

export default Header;
