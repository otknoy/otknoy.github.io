class Title extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.html(
      this.fontSize(),
      this.fontColor(),
      this.backgroundColor()
    );
  }

  fontSize() {
    const fontSize = {
      small: '16px',
      medium: '22px',
      large: '28px'
    };
    
    const type = this.getAttribute('size');

    return type in fontSize ? fontSize[type] : fontSize['medium'];
  }

  fontColor() {
    const color = this.getAttribute('color');

    return [
      'white',
      'black'
    ].includes(color) ? color : 'white';
  }

  backgroundColor() {
    const color = this.getAttribute('bgColor');

    return [
      'white',
      'grey',
      'black'
    ].includes(color) ? color : 'grey';
  }

  html(fontSize, fontColor, backgroundColor) {
    return `
<style>
h1 {
  margin: 0px;
  padding: 4px;
  font-size: ${fontSize};
  color: ${fontColor};
  background-color: ${backgroundColor};
}
</style>
<h1><slot></slot></h1>
`;
  }
}

customElements.define('x-title', Title);
