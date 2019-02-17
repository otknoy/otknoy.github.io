class MyArticles extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = this.template();
  }

  template() {
    return `
<section>
  <h1>blog</h1>

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
