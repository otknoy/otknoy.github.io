function createTitle(name, level, color) {
  class Title extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = this.html(level);
    }

    html(level) {
      return `
<style>
* {
  margin: 0px;
  padding: 8px;
  color: white;
  background-color: ${color};
}
</style>
<h${level}><slot></slot></h${level}>
`;
      
    }
  }

  customElements.define(name, Title);
}

[
  {
    name: 'large-title',
    level: 1,
    color: 'black',
  },
  {
    name: 'medium-title',
    level: 2,
    color: 'grey',
  },
  {
    name: 'small-title',
    level: 3,
    color: 'grey',
  }
].forEach((e, i, a) => {
  createTitle(e.name,  e.level, e.color);
});
