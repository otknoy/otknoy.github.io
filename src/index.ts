import './components/profile.js';

import './organisms/header.js';
import './organisms/article.js';
import './organisms/footer.js';

const state = {
  blog: [
    {
      title: 'これはタイトルです',
      text: 'これはテキストです',
      created_at: '2019/05/07 20:49'
    },
    {
      title: 'This is title',
      text:
        'This is text ああああああああああああああああああああああああああああああああああああああああああ',
      created_at: '2019/05/07 20:48'
    }
  ]
};

class Page extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = this.html();
  }

  html() {
    return `
<my-header></my-header>

<my-profile></my-profile>

<div style="padding: 8px">
<my-article
  title="${state.blog[0].title}"
  text="${state.blog[0].text}"
></my-article>
<my-article
  title="${state.blog[1].title}"
  text="${state.blog[1].text}"
></my-article>
</div>

<my-footer></my-footer>
`;
  }
}

customElements.define('my-page', Page);
