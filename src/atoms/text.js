const createTextElement = (size) => {
  class Text extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = this.html(size);
    }

    html(size) {
      return ` 
<style>
:host {
  font-size: ${size};
}

p {
  margin: 0px;
}
</style>
<p>
  <slot></slot>
</p>
`;
    }
  }

  return Text;
}

customElements.define('large-text',  createTextElement('22px'));
customElements.define('medium-text', createTextElement('18px'));
customElements.define('small-text',  createTextElement('14px'));
