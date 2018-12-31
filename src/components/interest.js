class MyInterest extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = this.template();
  }

  template() {
    return `
<div>
  <h2>Interest</h2>

  <ul>
	  <li><strong>Information Retrieval</strong></li>
	  <li>Human Computer Interaction</li>
	  <li>Natural Language Processing</li>
	  <li>Machine Learning</li>
  </ul>
</div>
`;
  }
}

customElements.define('my-interest', MyInterest);
