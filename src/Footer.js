import {html, render} from 'lit-html';

class Footer extends HTMLElement {
  constructor() {
    super();

    render(this.html(), this.attachShadow({mode: 'open'}));
  }

  html() {
    return html`
<style>
:host {
  text-align: center;
  margin-top: auto;
}

h1 {
  margin: 0px;
  padding: 4px;
  font-size: 16px;
}

</style>
<footer>
  <h1>(C) 1988-2020 Naoya Otsuka</h1>
</footer>
`;
  }
}

export default Footer;
