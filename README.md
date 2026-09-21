# otknoy.github.io
[![Docker Image CI](https://github.com/otknoy/otknoy.github.io/actions/workflows/docker-image.yml/badge.svg)](https://github.com/otknoy/otknoy.github.io/actions/workflows/docker-image.yml)
[![github pages](https://github.com/otknoy/otknoy.github.io/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/otknoy/otknoy.github.io/actions/workflows/gh-pages.yml)
[![Node.js CI](https://github.com/otknoy/otknoy.github.io/actions/workflows/nodejs.yml/badge.svg)](https://github.com/otknoy/otknoy.github.io/actions/workflows/nodejs.yml)
[![pages-build-deployment](https://github.com/otknoy/otknoy.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/otknoy/otknoy.github.io/actions/workflows/pages/pages-build-deployment)

```
$ npm start
```

```
$ docker image build -t otknoy.github.io .
$ docker container run -it --rm -p 80:80 otknoy.github.io
```

## Blog posts

Add a Markdown file to `content/blog/` to publish a post. The filename becomes
the URL slug: `search-design.md` is published at `/blog/search-design`.

```markdown
---
title: 記事タイトル
description: 一覧とメタデータに使う短い説明
date: 2026-09-21
---

記事本文
```

Level-two and level-three headings, paragraphs, unordered lists, fenced code
blocks, links, bold text, and inline code are supported.
