import '../atoms/title.js';

class Interest extends HTMLElement {
  constructor() {
    super();

    const interests = [
      'Information Retrieval',
      'Human Computer Interaction',
      'Natural Language Processing',
      'Machine Learning'
    ];

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = this.render(interests);
  }

  render(interests) {
    return `
<section>
  <x-title size="medium">Interest</x-title>

  <ul>
    ${interests.map(e => `<li>${e}</li>`).join('')}
  </ul>
</section>
`;
  }

}

customElements.define('my-interest', Interest);
