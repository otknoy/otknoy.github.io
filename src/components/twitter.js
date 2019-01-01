const TwitterWidgetsLoader = require('twitter-widgets');

class TwitterTimeline extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
  }

  static get observedAttributes() {
    return ['account'];
  }

  connectedCallback() {
    TwitterWidgetsLoader.load((err, twttr) => {
      if (err) {
        console.log(err);
        return;
      }

      const dataSource = {
        sourceType: 'profile',
        screenName: 'otknoy'
      };
      const target = this.shadowRoot.getElementById('twitter-timeline');
      const options = {
        height: 480,
      };

      twttr.widgets.createTimeline(dataSource, target, options);
    });
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    switch (attributeName) {
    case 'account':
      this.render(newValue);
    }
  }

  render(account) {
    this.shadowRoot.innerHTML = `<div id="twitter-timeline"></div>`;
  }
}
customElements.define('twitter-timeline', TwitterTimeline);
