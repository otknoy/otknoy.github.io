class Text extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.html(
      this.fontSize(),
      this.fontColor()
    );
  }

  fontSize() {
    const fontSize = {
      small: '14px',
      medium: '18px',
      large: '22px'
    };

    const type = this.getAttribute('size');

    return type in fontSize ? fontSize[type] : fontSize['medium'];
  }

  fontColor() {
    const color = this.getAttribute('color');

    return [
      'white',
      'black'
    ].includes(color) ? color : 'black';
  }

  html(fontSize, fontColor) {
    return `
<style>
:host {
  font-size: ${fontSize};
  color: ${fontColor};
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
customElements.define('x-text', Text);

