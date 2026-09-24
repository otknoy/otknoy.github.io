# Repository Guidelines

## プロジェクト構成

Next.js App Router、React、TypeScript を使うプロフィール兼ブログサイトです。
`next.config.ts` で静的エクスポートと末尾スラッシュを有効にしています。

- `app/`: ページ、レイアウト、グローバル CSS、ページ単位の CSS Modules。
- `components/`: Markdown 表示などの再利用コンポーネント。
- `lib/`: 記事読み込みや Google Analytics の補助処理。
- `content/blog/`: Markdown 記事。画像などの専用アセットディレクトリは現状ありません。
- テストは対象ファイルと同じディレクトリに配置し、スナップショットは `__snapshots__/` に保存します。
- `.github/workflows/`: Node.js CI、Docker ビルド、GitHub Pages 配信。

## ビルド・テスト・開発コマンド

Node.js 24.x または 26.x を使用してください。`.npmrc` はエンジン制約を強制します。

- `npm ci`: ロックファイルに従って依存関係をインストール。
- `npm run dev`: 開発サーバーをポート 3001 で起動。
- `npm run build`: 本番向け静的サイトを `out/` に生成。
- `npm start`: ビルド済みの `out/` をローカル配信。事前にビルドが必要です。
- `npm run lint`: ESLint によるコード検査。
- `npm test`: Vitest を一度実行。
- `npm run test:watch`: 変更を監視してテストを再実行。

## コーディング規約・命名

TypeScript の strict 設定を維持し、既存コードに合わせて 2 スペースでインデントします。
Prettier の設定はセミコロンなし、シングルクォート、行幅 80 です。
整形には `npx prettier --write <対象ファイル>` を使用してください。
ESLint は Next.js の Core Web Vitals と TypeScript のルールを使用します。

コンポーネントは `Markdown.tsx` のような PascalCase、関数・変数は camelCase とします。
ルートは `page.tsx`、レイアウトは `layout.tsx`、局所的なスタイルは `*.module.css` に配置してください。

## テスト方針

Vitest、jsdom、React Testing Library を使用します。テスト名は `*.test.tsx`、
ロジックのみなら `*.test.ts` とし、変更した動作を検証してください。
カバレッジの数値基準は設定されていません。

スナップショットを更新する場合は差分を確認し、意図した表示変更だけを含めます。
日付依存のテストは `app/page.test.tsx` に倣って時刻を固定してください。
提出前に `npm run build`、`npm run lint`、`npm test` を実行します。
CI は Node.js 24.x と 26.x で同じ検証を行います。

## 記事の追加

記事名は `YYYYMMDD_title.md` とし、例として `20260922_search-design.md` を使用します。
タイトル部分は半角英小文字・数字をハイフンで区切ります。
先頭の front matter に `title`、`description`、`date: YYYY-MM-DD` を必ず記載し、
日付をファイル名と一致させてください。ファイル名が URL の slug になります。
表・タスクリスト・コードブロックなどの GitHub Flavored Markdown に対応しています。

## コミット・Pull Request

履歴に合わせ、`feat:`、`fix:`、`refactor:`、`style:`、`copy:`、`chore:` などの接頭辞と
短い英語の要約を使用します。例: `fix: include blog content in Docker build`。

PR は `main` 向けに作成し、変更目的、主な変更点、検証結果を記載してください。
関連 Issue があればリンクし、表示変更にはスクリーンショットを添付します。
`main` への push で GitHub Pages 配信が実行される点に注意してください。
生成物の `out/`、`.next/` や秘密情報はコミットしないでください。

## エージェント向け指示

ユーザーへの回答は日本語で簡潔かつ丁寧に行ってください。
