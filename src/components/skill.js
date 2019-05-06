import '../atoms/title.js';

class Skill extends HTMLElement {
  constructor() {
    super();

    const skills = [
      'Java, SpringBoot, ',
      'Node.js, express',
      'Golang',
      'Python'
    ];

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = this.render(skills);
  }

  render(skills) {
    return `
<section>
  <x-title size="medium">Skill</x-title>

  <ul>
    ${skills.map(e => `<li>${e}</li>`).join('')}
  </ul>
</section>
`;
  }

}

customElements.define('my-skill', Skill);
