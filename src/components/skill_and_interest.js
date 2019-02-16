class MySkillAndInterest extends HTMLElement {
  constructor() {
    super();

    const skills = [
      'Java, SpringBoot, ',
      'Node.js, express',
      'Golang',
      'Python',
      'Information Retrieval',
      'Human Computer Interaction',
      'Natural Language Processing',
      'Machine Learning'
    ];

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = this.template(skills);
  }

  template(skills) {
    return `
<section>
  <h1>Skill & Interest</h1>

  <ul>
    ${skills.map(e => `<li>${e}</li>`).join('')}
  </ul>
</section>
`;
  }

  item(text) {
    return `<li>${text}</li>`;
  }
}

customElements.define('my-skill-and-interest', MySkillAndInterest);
