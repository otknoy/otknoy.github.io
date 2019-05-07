class Title extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.html([
      this.fontSize(),
      this.color()
    ]);
  }

  fontSize() {
    const size = this.getAttribute('size');

    return [
      'small',
      'medium',
      'large'
    ].includes(size) ? size : 'medium';
  }

  color() {
    const color = this.getAttribute('color');

    return [
      'white',
      'grey',
      'black'
    ].includes(color) ? color : 'grey';
  }

  html(classes) {
    return `
<style>
.small {
  font-size: 16px;
}

.medium {
  font-size: 22px;
}

.large {
  font-size: 28px;
}

.white {
  color: black;
}

.grey {
  color: white;
  background-color: grey;
}

.black {
  color: white;
  background-color: black;
}

h1 {
  margin: 0px;
  padding: 4px;
}
</style>
<h1 class="${classes.join(' ')}">
  <slot></slot>
</h1>
`;
  }
}

customElements.define('x-title', Title);
