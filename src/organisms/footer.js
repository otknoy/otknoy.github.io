import '../atoms/text.js';

class Footer extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.html();
  }

  html() {
    return `
    <style>
      :host {
        text-align: center;
      }
    </style>
    <footer class="footer">
      <x-title size="small" color="black">
        (C) 1988-2019 Naoya Otsuka
      </x-title>
    </footer>
`;
  }
}

customElements.define('my-footer', Footer);
