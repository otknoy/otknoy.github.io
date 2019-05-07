class Text extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.html(
      this.fontSize()
    );
  }

  fontSize() {
    const size = this.getAttribute('size');

    return [
      'small',
      'medium',
      'large'
    ].includes(size) ? size : 'medium';
  }

  html(fontSize) {
    return `
<style>
.small {
  font-size: 14px;
}

.medium {
  font-size: 18px;
}

.large {
  font-size: 22px;
}

p {
  margin: 0px;
}
</style>
<p class="${fontSize}">
  <slot></slot>
</p>
`;
  }
}

customElements.define('x-text', Text);

