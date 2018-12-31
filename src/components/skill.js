class MySkill extends HTMLElement {
  constructor() {
    super();

    const skills = [
      'Java, SpringBoot',
      'Node.js, express',
      'Golang',
      'Python'
    ];

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = this.template(skills);
  }

  template(skills) {
    return `
<div>
  <h2>Skill</h2>
  <ul>
    ${skills.map(e => this.item(e)).join('')}
  </ul>
</div>
`;
  }

  item(text) {
    return `<li>${text}</li>`;
  }
}

customElements.define('my-skill', MySkill);
