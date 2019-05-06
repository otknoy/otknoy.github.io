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

      .footer {
        background-color: grey;
      }

      div {
        padding: 4px;
      }
    </style>
    <footer class="footer">
      <div>
        <small-text>(C) 1988-2019 Naoya Otsuka</small-text>
      </div>
    </footer>
`;
  }
}

customElements.define('my-footer', Footer);
