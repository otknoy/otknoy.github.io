const TwitterWidgetsLoader = require('twitter-widgets');

class TwitterTimeline extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<div id="twitter-timeline"></div>`;
  }

  connectedCallback() {
    const account = this.getAttribute('account');

    TwitterWidgetsLoader.load((err, twttr) => {
      if (err) {
        console.log(err);
        return;
      }

      const dataSource = {
        sourceType: 'profile',
        screenName: account
      };
      const target = this.shadowRoot.getElementById('twitter-timeline');
      const options = {
        height: 320,
      };

      twttr.widgets.createTimeline(dataSource, target, options);
    });
  }
}

customElements.define('twitter-timeline', TwitterTimeline);
