import '../atoms/title.js';
import '../atoms/text.js';

class Article extends HTMLElement {
  constructor() {
    super();

    const title = this.getAttribute('title');
    const text = this.getAttribute('text');

    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.html(title, text);
  }

  html(title, text) {
    return `
<style>
div {
  padding: 8px;
}

footer x-text {
  text-align: right;
}
</style>
<article>
  <header>
    <x-title size="medium">${title}</x-title>
  </header>
 
  <div>
    <x-text size="medium">${text}</x-text>
  </div>

  <footer>
    <x-text size="small">(share button)</x-text>
  </footer>
</article>
`;
  }
}

customElements.define('my-article', Article);
