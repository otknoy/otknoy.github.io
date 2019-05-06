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
      div {
        background-color: black;
        text-align: center;
        padding: 4px;
      }
    </style>
    <footer class="footer">
      <div>
        <x-text size="small" color="white">
          (C) 1988-2019 Naoya Otsuka
        </x-text>
      </div>
    </footer>
`;
  }
}

customElements.define('my-footer', Footer);
