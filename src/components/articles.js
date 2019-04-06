import { html, render } from 'lit-html';

class MyArticles extends HTMLElement {
  constructor() {
    super();

    // render(this.html(), this.attachShadow({mode: 'open'});

    // const shadowRoot = this.attachShadow({mode: 'open'});
    // shadowRoot.innerHTML = this.templante();
    render(this.template(), this.attachShadow({mode: 'open'}));
  }

  template() {
    return html`
<section>
  <h1>Articles</h1>

  <article>
    <header>
      <h1>sample title</h1>
    </header>

    <p>sample text.</p>
  </article>
</section>
`;
  }
}

customElements.define('my-articles', MyArticles);
