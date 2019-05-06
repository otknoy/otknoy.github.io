import { html, render } from 'lit-html';

import '../atoms/title.js';
import '../atoms/text.js';

class Article extends HTMLElement {
  constructor() {
    super();

    const title = this.getAttribute('title');
    const text = this.getAttribute('text');

    this.attachShadow({mode: 'open'});
    render(this.template(title, text), this.shadowRoot);
  }

  template(title, text) {
    return html`
<style>
div {
  padding: 8px;
}
</style>
<article>
  <header>
    <medium-title>${title}</medium-title>
  </header>
 
  <div>
    <medium-text>${text}</medium-text>
  </div>

  <footer>
    <small-text style="text-align: right">(share button)</small-text>
  </footer>
</article>
`;
  }
}

customElements.define('my-article', Article);
